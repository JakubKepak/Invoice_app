import { useState } from 'react';
import * as S from './Styles';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { GET_INVOICE } from '../../queries/queries';
import useFetch from 'hooks/useFetch';
import useDBHandler from 'hooks/useDBHandler';

import { fromatDate, addCommaSeparator } from '../../helpers/helpers';

import EditInvoice from '../EditInvoice/EditInvoice';

import InvoiceStatusIcon from 'components/UI/InvoiceStatusIcon';
import Button from 'components/UI/Button';
import Modal from '../Modal';
import DeleteModal from 'components/UI/DeleteModal';
import ErrorPage from 'components/UtilityPages/ErrorPage';
import Loader from 'components/UI/Loader';

import leftArrowIcon from 'assets/icon-arrow-left.svg';

export default function InvoiceDetailPage(): React.ReactElement {
  const { id } = useParams<Record<string, string | undefined>>();

  const [editActive, setEditActive] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data: invoice, error, loading } = useFetch(GET_INVOICE, { id: id });
  const { deleteInvoiceHandler, updateInvoiceStatusHandler } = useDBHandler(
    invoice
  );

  return (
    <>
      {error && <ErrorPage error={error} />}
      {loading && <Loader />}
      {!loading && invoice && (
        <S.MainContainer>
          <S.GoBackContainer>
            <Link to='/'>
              <span>
                <S.LeftArrowIcon src={leftArrowIcon} />
                Go Back
              </span>
            </Link>
          </S.GoBackContainer>
          <S.HeaderContainer>
            <span>Status</span>
            <InvoiceStatusIcon status={`${invoice.data.status}`}>
              {invoice.data.status}
            </InvoiceStatusIcon>
            <S.ButtonsContainer>
              <Button variant='secondary' onClick={() => setEditActive(true)}>
                Edit
              </Button>
              <Button variant='warn' onClick={() => setShowModal(true)}>
                Delete
              </Button>
              <Button onClick={updateInvoiceStatusHandler} variant='primary'>
                Mark as Paid
              </Button>
            </S.ButtonsContainer>
          </S.HeaderContainer>
          <S.ContentContainer>
            <S.InvoiceHeaderContainer>
              <S.IdContainer>
                <p>
                  <span>#</span>
                  {invoice.data.id}
                </p>
                <p>{invoice.data.description}</p>
              </S.IdContainer>
              <S.AddressContainer>
                <p>{invoice.data.senderAddress.street}</p>
                <p>{invoice.data.senderAddress.city}</p>
                <p>{invoice.data.senderAddress.postCode}</p>
                <p>{invoice.data.senderAddress.country}</p>
              </S.AddressContainer>
            </S.InvoiceHeaderContainer>
            <S.InvoiceDetailsContainer>
              <S.DatesContainer>
                <S.ItemLabel>Invoice Date</S.ItemLabel>
                <S.ItemImportant>
                  {fromatDate(invoice.data.createdAt)}
                </S.ItemImportant>
                <S.ItemLabel>Payment Due</S.ItemLabel>
                <S.ItemImportant>
                  {fromatDate(invoice.data.paymentDue)}
                </S.ItemImportant>
              </S.DatesContainer>
              <S.BillToContainer>
                <S.ItemLabel>Bill To</S.ItemLabel>
                <S.ItemImportant>{invoice.data.clientName}</S.ItemImportant>
                <p>{invoice.data.clientAddress.street}</p>
                <p>{invoice.data.clientAddress.city}</p>
                <p>{invoice.data.clientAddress.postCode}</p>
                <p>{invoice.data.clientAddress.country}</p>
              </S.BillToContainer>
              <S.SentToContainer>
                <S.ItemLabel>Sent To</S.ItemLabel>
                <S.ItemImportant>{invoice.data.clientEmail}</S.ItemImportant>
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
                {invoice.data.items.map((item: any, index: number) => {
                  return (
                    <S.ItemContainer key={index}>
                      <span>{item.name}</span>
                      <span>{item.quantity}</span>
                      <span>x</span>
                      <span>{`£ ${addCommaSeparator(item.price)}`}</span>
                      <span>{`£ ${addCommaSeparator(item.total)}`}</span>
                    </S.ItemContainer>
                  );
                })}
              </S.ItemsListContainer>
              <S.TotalAmountContainer>
                <S.ItemLabel>Amount Due</S.ItemLabel>
                <S.TotalAmount>
                  {`£ ${addCommaSeparator(invoice.data.total)}`}
                </S.TotalAmount>
              </S.TotalAmountContainer>
            </S.InvoiceItemsContainer>
          </S.ContentContainer>
        </S.MainContainer>
      )}

      <AnimatePresence>
        {editActive && (
          <EditInvoice
            setEditActive={setEditActive}
            variant='edit'
            invoiceId={invoice.data.id}
            providerStreetAddress={invoice.data.senderAddress.street}
            providerCity={invoice.data.senderAddress.city}
            providerPostalCode={invoice.data.senderAddress.postCode}
            providerCountry={invoice.data.senderAddress.country}
            clientsName={invoice.data.clientName}
            clientsEmail={invoice.data.clientEmail}
            clientsStreetAddress={invoice.data.clientAddress.street}
            clientCity={invoice.data.clientAddress.city}
            clientPostalCode={invoice.data.clientAddress.postCode}
            clientCountry={invoice.data.clientAddress.country}
            invoiceDate={invoice.data.createdAt}
            paymentTerms={invoice.data.paymentTerms}
            description={invoice.data.description}
            invoiceItems={invoice.data.items}
            status={invoice.data.status}
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
