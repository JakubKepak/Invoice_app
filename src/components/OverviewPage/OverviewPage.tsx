import { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { InvoicesContext } from 'contexts/InvoicesContext';
import * as S from './Styles';
import { InvoiceType } from 'types/types';

// components
import PrimaryButtonAdd from 'components/UI/PrimaryButtonAdd';
import InvoicePreview from 'components/InvoicePreview/InvoicePreview';
import EditInvoice from 'components/EditInvoice/EditInvoice';
import ErrorPage from 'components/UtilityPages/ErrorPage';
import Loader from 'components/UI/Loader';
import EmptyPage from 'components/UtilityPages/EmptyPage';
import Filter from 'components/OverviewPage/Subcomponents/Filter';

export default function OverviewPage(): React.ReactElement {
  const [editActive, setEditActive] = useState<boolean>(false);
  const { data, error, loading } = useContext(InvoicesContext);

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
                <Filter />
                <PrimaryButtonAdd setEditActive={setEditActive}>
                  New
                </PrimaryButtonAdd>
              </S.OptionItemsContainer>
            </S.HeaderContainer>

            <S.ContentContainer>
              {data.data.length > 0 ? (
                data.data.map((invoice: InvoiceType) => {
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
