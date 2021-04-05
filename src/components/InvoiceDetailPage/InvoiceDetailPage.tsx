import { useState } from "react";
import * as S from "./Styles";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { REMOVE_INVOICE, UPDATE_INVOICE } from "../../queries/queries";
import { useMutation } from "@apollo/client";

import { fromatDate, addCommaSeparator } from "../../helpers/helpers";

import EditInvoice from "../EditInvoice/EditInvoice";

import InvoiceStatusIcon from "../UI/InvoiceStatusIcon";
import Button from "../UI/Button";
import Modal from "../Modal";
import DeleteModal from "../UI/DeleteModal";

import leftArrowIcon from "../../assets/icon-arrow-left.svg";

export default function InvoiceDetailPage() {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteInvoice] = useMutation(REMOVE_INVOICE);
  const [updateInvoice] = useMutation(UPDATE_INVOICE);

  const location = useLocation();
  const history = useHistory();
  const invoice: any = location.state;

  const deleteInvoiceHandler = () => {
    deleteInvoice({ variables: { id: invoice.id } });
    history.push("/");
  };

  const updateInvoiceHandler = () => {
    updateInvoice({
      variables: { invoice: { id: invoice.id, status: "PAID" } },
    });
  };

  console.log(invoice);

  return (
    <>
      <S.MainContainer>
        <S.GoBackContainer>
          <Link to="/">
            <span>
              <S.LeftArrowIcon src={leftArrowIcon} />
              Go Back
            </span>
          </Link>
        </S.GoBackContainer>
        <S.HeaderContainer>
          <span>Status</span>
          <InvoiceStatusIcon status={`${invoice.status}`}>
            {invoice.status}
          </InvoiceStatusIcon>
          <S.ButtonsContainer>
            <Button variant="secondary" onClick={() => setEditActive(true)}>
              Edit
            </Button>
            <Button variant="warn" onClick={() => setShowModal(true)}>
              Delete
            </Button>
            <Button onClick={updateInvoiceHandler} variant="primary">
              Mark as Paid
            </Button>
          </S.ButtonsContainer>
        </S.HeaderContainer>
        <S.ContentContainer>
          <S.InvoiceHeaderContainer>
            <S.IdContainer>
              <p>
                <span>#</span>
                {invoice.id}
              </p>
              <p>{invoice.description}</p>
            </S.IdContainer>
            <S.AddressContainer>
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </S.AddressContainer>
          </S.InvoiceHeaderContainer>
          <S.InvoiceDetailsContainer>
            <S.DatesContainer>
              <S.ItemLabel>Invoice Date</S.ItemLabel>
              <S.ItemImportant>{fromatDate(invoice.createdAt)}</S.ItemImportant>
              <S.ItemLabel>Payment Due</S.ItemLabel>
              <S.ItemImportant>
                {fromatDate(invoice.paymentDue)}
              </S.ItemImportant>
            </S.DatesContainer>
            <S.BillToContainer>
              <S.ItemLabel>Bill To</S.ItemLabel>
              <S.ItemImportant>{invoice.clientName}</S.ItemImportant>
              <p>{invoice.clientAddress.street}</p>
              <p>{invoice.clientAddress.city}</p>
              <p>{invoice.clientAddress.postCode}</p>
              <p>{invoice.clientAddress.country}</p>
            </S.BillToContainer>
            <S.SentToContainer>
              <S.ItemLabel>Sent To</S.ItemLabel>
              <S.ItemImportant>{invoice.clientEmail}</S.ItemImportant>
            </S.SentToContainer>
          </S.InvoiceDetailsContainer>
          <S.InvoiceItemsContainer>
            <S.ItemsListContainer>
              <S.ItemContainerHeader>
                <span>Item Name</span>
                <span>QTY.</span>
                <span>Price</span>
                <span>Total</span>
              </S.ItemContainerHeader>
              {invoice.items.map((item: any) => {
                return (
                  <S.ItemContainer>
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                    <span>{`£ ${addCommaSeparator(item.price)}`}</span>
                    <span>{`£ ${addCommaSeparator(item.total)}`}</span>
                  </S.ItemContainer>
                );
              })}
            </S.ItemsListContainer>
            <S.TotalAmountContainer>
              <S.ItemLabel>Amount Due</S.ItemLabel>
              <S.TotalAmount>
                {`£ ${addCommaSeparator(invoice.total)}`}
              </S.TotalAmount>
            </S.TotalAmountContainer>
          </S.InvoiceItemsContainer>
        </S.ContentContainer>
      </S.MainContainer>

      <AnimatePresence>
        {editActive && (
          <EditInvoice
            setEditActive={setEditActive}
            variant="edit"
            invoiceId={invoice.id}
            providerStreetAddress={invoice.senderAddress.street}
            providerCity={invoice.senderAddress.city}
            providerPostalCode={invoice.senderAddress.postCode}
            providerCountry={invoice.senderAddress.country}
            clientsName={invoice.clientName}
            clientsEmail={invoice.clientEmail}
            clientsStreetAddress={invoice.clientAddress.street}
            clientCity={invoice.clientAddress.city}
            clientPostalCode={invoice.clientAddress.postCode}
            clientCountry={invoice.clientAddress.country}
            invoiceDate={invoice.createdAt}
            paymentTerms={invoice.paymentTerms}
            description={invoice.description}
            invoiceItems={invoice.items}
          />
        )}

        {showModal ? (
          <Modal>
            <DeleteModal
              onClick={deleteInvoiceHandler}
              closeModal={() => setShowModal(false)}
            >
              Delete invoice {invoice.id} ?
            </DeleteModal>
          </Modal>
        ) : null}
      </AnimatePresence>
    </>
  );
}
