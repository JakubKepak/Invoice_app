import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import useFetch from 'hooks/useFetch';
import * as S from './Styles';

import { INVOICES } from 'queries/queries';

import PrimaryButtonAdd from 'components/UI/PrimaryButtonAdd';

import arrowDown from 'assets/icon-arrow-down.svg';

// components
import InvoicePreview from 'components/InvoicePreview/InvoicePreview';
import EditInvoice from 'components/EditInvoice/EditInvoice';
import ErrorPage from 'components/UtilityPages/ErrorPage';
import Loader from 'components/UI/Loader';
import EmptyPage from 'components/UtilityPages/EmptyPage';

export default function OverviewPage() {
  const [editActive, setEditActive] = useState<boolean>(false);
  const { data, error, loading } = useFetch(INVOICES);

  return (
    <>
      {error && <ErrorPage error={error} />}
      {loading && <Loader />}
      {!loading && !error && data && (
        <>
          <S.MainContainer>
            <S.HeaderContainer data-test='component-overviewPage-Header'>
              <S.PageTitleContainer>
                <h1>Invoices</h1>
                <span>
                  {data.data.length > 0
                    ? `${data.data.length} invoices`
                    : 'No Invoices'}
                </span>
              </S.PageTitleContainer>
              <S.OptionItemsContainer>
                <S.FilterContainer>
                  <span>Filter</span>
                  <S.ArrowImage src={arrowDown} />
                </S.FilterContainer>
                <PrimaryButtonAdd setEditActive={setEditActive}>
                  New
                </PrimaryButtonAdd>
              </S.OptionItemsContainer>
            </S.HeaderContainer>

            <S.ContentContainer>
              {/* TODO: make more strict type for invoice */}
              {data.data.length > 0 ? (
                data.data.map((invoice: any) => {
                  return (
                    <InvoicePreview
                      invoice={invoice}
                      key={invoice.id}
                      id={invoice.id}
                      paymentDue={invoice.paymentDue}
                      clientName={invoice.clientName}
                      total={invoice.total}
                      status={invoice.status}
                    />
                  );
                })
              ) : (
                <EmptyPage />
              )}
            </S.ContentContainer>
          </S.MainContainer>
          <AnimatePresence>
            {editActive && (
              <EditInvoice variant='new' setEditActive={setEditActive} />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
