import { useEffect } from "react";
import { useFormik, Formik, Form, Field, FieldArray, useField } from "formik";
import { addCommaSeparator } from "../../helpers/helpers";
import * as S from "./Styles";

import Button from "../UI/Button";

import deleteIcon from "../../assets/icon-delete.svg";

const CustomTextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <S.InputFieldContainer>
      <S.InputLabel htmlFor={props.id || props.name}>{label}</S.InputLabel>
      <S.InputField {...field} {...props} />
    </S.InputFieldContainer>
  );
};

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
  invoiceDate = "",
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
  return (
    <S.MainContainer>
      <S.InputAreaContainer>
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
          onSubmit={(values, actions) => {
            if (variant === "new") {
              setTimeout(() => {
                alert(`creating - ${JSON.stringify(values, null, 2)}`);
                actions.setSubmitting(false);
              }, 1000);
            }
            if (variant === "edit") {
              setTimeout(() => {
                alert(`editing - ${JSON.stringify(values, null, 2)}`);
                actions.setSubmitting(false);
              }, 1000);
            }
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
                <CustomTextField
                  id="invoiceDate"
                  name="invoiceDate"
                  type="text"
                  label="Invoice Date"
                  value={props.values.invoiceDate}
                />
                <CustomTextField
                  id="paymentTerms"
                  name="paymentTerms"
                  type="text"
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
                              type="text"
                              value={item.quantity}
                            />
                            <CustomTextField
                              id={`invoiceItems.${index}.price`}
                              name={`invoiceItems.${index}.price`}
                              type="text"
                              value={addCommaSeparator(item.price)}
                            />
                            <S.InvoiceItemTotalContainer>
                              {addCommaSeparator(item.total)}
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
                <Button variant="secondary">
                  <button type="button">Discard</button>
                </Button>
                <Button variant="dark">
                  <button type="button">Save as Draft</button>
                </Button>
                <Button variant="primary">
                  <button type="submit">Save & Send</button>
                </Button>
              </S.ButtonsContainer>
            </Form>
          )}
        </Formik>
      </S.InputAreaContainer>
      <S.InvisibleContainer
        onClick={() => setEditActive(false)}
      ></S.InvisibleContainer>
    </S.MainContainer>
  );
}
