import { useState } from "react";
import { Formik, Form, FieldArray, useField } from "formik";
import * as Yup from "yup";
import { addCommaSeparator } from "../../helpers/helpers";
import * as S from "./Styles";
import {
  ADD_INVOICE,
  UPDATE_INVOICE,
  INVOICES,
  GET_INVOICE,
} from "../../queries/queries";
import { useMutation } from "@apollo/client";

import Button from "../UI/Button";
import {
  CustomDatePickerField,
  CustomFropDownField,
  CustomTextField,
} from "components/UI/CustomInputFields";

import deleteIcon from "../../assets/icon-delete.svg";

const EditSchema = Yup.object().shape({
  // providerStreetAddress: Yup.string().required("Required"),
  // providerCity: Yup.string().required("Required"),
  // providerPostalCode: Yup.string().required("Required"),
  // providerCountry: Yup.string().required("Required"),
  // clientsName: Yup.string().required("Required").min(2, "Too Short!"),
  // clientsEmail: Yup.string().required("Required"),
  // clientsStreetAddress: Yup.string().required("Required"),
  // clientCity: Yup.string().required("Required"),
  // clientPostalCode: Yup.string().required("Required"),
  // clientCountry: Yup.string().required("Required"),
  // invoiceDate: Yup.string().required("Required"),
  // paymentTerms: Yup.string().required("Required"),
  // description: Yup.string().required("Required"),
});

interface Props {
  setEditActive?: any;
  variant: "new" | "edit";
  invoiceId?: string;
  providerStreetAddress?: string;
  providerCity?: string;
  providerPostalCode?: string;
  providerCountry?: string;
  clientsName?: string;
  clientsEmail?: string;
  clientsStreetAddress?: string;
  clientCity?: string;
  clientPostalCode?: string;
  clientCountry?: string;
  invoiceDate?: string;
  paymentTerms?: number;
  description?: string;
  invoiceItems?: any;
}

export default function EditInvoice({
  setEditActive,
  variant,
  invoiceId = "",
  providerStreetAddress = "",
  providerCity = "",
  providerPostalCode = "",
  providerCountry = "",
  clientsName = "",
  clientsEmail = "",
  clientsStreetAddress = "",
  clientCity = "",
  clientPostalCode = "",
  clientCountry = "",
  invoiceDate = new Date(Date.now()).toLocaleDateString("en-CA"),
  paymentTerms = 1,
  description = "",
  invoiceItems = [
    {
      name: "",
      quantity: 1,
      price: 0,
      total: 0,
    },
  ],
}: Props) {
  const [invoiceStatus, setInvoiceStatus] = useState("PENDING");
  const [addInvoice] = useMutation(ADD_INVOICE, {
    update(cache, { data: { data } }) {
      const AllInvoices: any = cache.readQuery({ query: INVOICES });
      cache.writeQuery({
        query: INVOICES,
        data: { data: [data, ...AllInvoices.data] },
      });
    },
  });
  const [editInvoice] = useMutation(UPDATE_INVOICE);

  return (
    <S.MainContainer onClick={() => setEditActive(false)}>
      <S.InputAreaContainer
        key={"editModal"}
        onClick={(e) => e.stopPropagation()}
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -500 }}
      >
        <p>
          {variant === "new" ? <p>New Invoice</p> : <p>Edit #{invoiceId}</p>}
        </p>

        <Formik
          initialValues={{
            providerStreetAddress: providerStreetAddress,
            providerCity: providerCity,
            providerPostalCode: providerPostalCode,
            providerCountry: providerCountry,
            clientsName: clientsName || "",
            clientsEmail: clientsEmail,
            clientsStreetAddress: clientsStreetAddress,
            clientCity: clientCity,
            clientPostalCode: clientPostalCode,
            clientCountry: clientCountry,
            invoiceDate: invoiceDate,
            paymentTerms: paymentTerms,
            description: description,
            invoiceItems: invoiceItems,
          }}
          validationSchema={EditSchema}
          onSubmit={(values, actions) => {
            // Calculate total for each item
            const completeInvoiceItems = values.invoiceItems.map(
              (item: any) => {
                return {
                  ...item,
                  total: item.price * item.quantity,
                };
              }
            );

            const calculateDueDate = (date: string, paymentTerms: number) => {
              let invoiceDate = new Date(date);
              invoiceDate.setDate(invoiceDate.getDate() + Number(paymentTerms));

              return invoiceDate.toLocaleDateString("en-CA");
            };

            // set variables for mutations
            const payload = {
              invoice: {
                id:
                  invoiceId !== ""
                    ? invoiceId
                    : `TEST-${Math.floor(Math.random() * 10000)}`,
                createdAt: values.invoiceDate,
                paymentDue: calculateDueDate(
                  values.invoiceDate,
                  values.paymentTerms
                ),
                paymentTerms: Number(values.paymentTerms),
                clientName: values.clientsName,
                clientEmail: values.clientsEmail,
                description: values.description,
                status: invoiceStatus,
                senderAddress: {
                  street: values.providerStreetAddress,
                  city: values.providerStreetAddress,
                  postCode: values.providerPostalCode,
                  country: values.providerCity,
                },
                clientAddress: {
                  street: values.clientsStreetAddress,
                  city: values.clientCity,
                  postCode: values.clientPostalCode,
                  country: values.clientCountry,
                },
                items: completeInvoiceItems,
                total: completeInvoiceItems.reduce(
                  (accumulator: any, currentValue: any) => {
                    return accumulator + currentValue.total;
                  },
                  0
                ),
              },
            };

            if (variant === "new") {
              addInvoice({ variables: payload });
            }

            if (variant === "edit") {
              editInvoice({
                variables: payload,
                refetchQueries: [
                  { query: GET_INVOICE, variables: { id: invoiceId } },
                ],
              });
            }

            actions.setSubmitting(false);
            setEditActive(false);
          }}
        >
          {(props) => (
            <Form>
              <S.SectionName>Bill From</S.SectionName>
              <S.FormSectionBillFrom>
                <CustomTextField
                  id="providerStreetAddress"
                  name="providerStreetAddress"
                  type="text"
                  label="Street Address"
                  value={props.values.providerStreetAddress}
                />
                <CustomTextField
                  id="providerCity"
                  name="providerCity"
                  type="text"
                  label="City"
                  value={props.values.providerCity}
                />
                <CustomTextField
                  id="providerPostalCode"
                  name="providerPostalCode"
                  type="text"
                  label="Post Code"
                  value={props.values.providerPostalCode}
                />
                <CustomTextField
                  id="providerCountry"
                  name="providerCountry"
                  type="text"
                  label="Country"
                  value={props.values.providerCountry}
                />
              </S.FormSectionBillFrom>

              <S.SectionName>Bill To</S.SectionName>
              <S.FormSectionBillTo>
                <CustomTextField
                  id="clientsName"
                  name="clientsName"
                  type="text"
                  label="Client's name"
                  value={props.values.clientsName}
                />
                <CustomTextField
                  id="clientsEmail"
                  name="clientsEmail"
                  type="text"
                  label="Client's Email"
                  value={props.values.clientsEmail}
                />
                <CustomTextField
                  id="clientsStreetAddress"
                  name="clientsStreetAddress"
                  type="text"
                  label="Stret Address"
                  value={props.values.clientsStreetAddress}
                />
                <CustomTextField
                  id="clientCity"
                  name="clientCity"
                  type="text"
                  label="City"
                  value={props.values.clientCity}
                />
                <CustomTextField
                  id="clientPostalCode"
                  name="clientPostalCode"
                  type="text"
                  label="Post Code"
                  value={props.values.clientPostalCode}
                />
                <CustomTextField
                  id="clientCountry"
                  name="clientCountry"
                  type="text"
                  label="Country"
                  value={props.values.clientCountry}
                />
              </S.FormSectionBillTo>

              <S.FormSectionInvoiceInfo>
                <CustomDatePickerField
                  id="invoiceDate"
                  name="invoiceDate"
                  type="date"
                  label="Invoice Date"
                  value={props.values.invoiceDate}
                />
                <CustomFropDownField
                  id="paymentTerms"
                  name="paymentTerms"
                  type="select"
                  label="Payment Terms"
                  value={props.values.paymentTerms}
                />
                <CustomTextField
                  id="description"
                  name="description"
                  type="text"
                  label="Project Description"
                  value={props.values.description}
                />
              </S.FormSectionInvoiceInfo>

              <S.FormSectionInvoiceItems>
                <S.SectionItemListName>Item List</S.SectionItemListName>
                <FieldArray name="invoiceItems">
                  {(arrayHelpers) => (
                    <>
                      <S.InvoiceItemContainer>
                        <S.InvoiceItemLabel>Item Name</S.InvoiceItemLabel>
                        <S.InvoiceItemLabel>Qty.</S.InvoiceItemLabel>
                        <S.InvoiceItemLabel>Price</S.InvoiceItemLabel>
                        <S.InvoiceItemLabel>Total</S.InvoiceItemLabel>
                      </S.InvoiceItemContainer>
                      {props.values.invoiceItems.map(
                        (item: any, index: number) => (
                          <S.InvoiceItemContainer key={index}>
                            <CustomTextField
                              id={`invoiceItems.${index}.name`}
                              name={`invoiceItems.${index}.name`}
                              type="text"
                              value={item.name}
                            />
                            <CustomTextField
                              id={`invoiceItems.${index}.quantity`}
                              name={`invoiceItems.${index}.quantity`}
                              type="number"
                              value={item.quantity}
                            />
                            <CustomTextField
                              id={`invoiceItems.${index}.price`}
                              name={`invoiceItems.${index}.price`}
                              type="number"
                              value={item.price}
                            />
                            <S.InvoiceItemTotalContainer>
                              {addCommaSeparator(item.quantity * item.price)}
                            </S.InvoiceItemTotalContainer>
                            <S.DeleteInvoiceItemContainer>
                              <S.DeleteInvoiceItemIcon
                                src={deleteIcon}
                                alt="delete invoice item"
                                onClick={() => arrayHelpers.remove(index)}
                              />
                            </S.DeleteInvoiceItemContainer>
                          </S.InvoiceItemContainer>
                        )
                      )}
                      <S.AddNewInvoiceItemButton
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({
                            name: "",
                            quantity: 1,
                            price: 0,
                            total: 0,
                          })
                        }
                      >
                        + Add New Item
                      </S.AddNewInvoiceItemButton>
                    </>
                  )}
                </FieldArray>
              </S.FormSectionInvoiceItems>

              <S.ButtonsContainer>
                <Button
                  onClick={() => setEditActive(false)}
                  type="button"
                  variant="secondary"
                >
                  Discard
                </Button>
                <Button
                  onClick={() => setInvoiceStatus("DRAFT")}
                  type="submit"
                  variant="dark"
                >
                  Save as Draft
                </Button>
                <Button type="submit" variant="primary">
                  Save & Send
                </Button>
              </S.ButtonsContainer>
            </Form>
          )}
        </Formik>
      </S.InputAreaContainer>
    </S.MainContainer>
  );
}
