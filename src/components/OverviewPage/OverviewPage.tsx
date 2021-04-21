import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useLazyQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";
import * as S from "./Styles";

import { INVOICES } from "queries/queries";

import PrimaryButtonAdd from "components/UI/PrimaryButtonAdd";

import arrowDown from "assets/icon-arrow-down.svg";
import illustrationEmpty from "assets/illustration-empty.svg";

// components
import InvoicePreview from "components/InvoicePreview/InvoicePreview";
import EditInvoice from "components/EditInvoice/EditInvoice";

export default function OverviewPage() {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [fetchInvoices, { data, error, loading, called }] = useLazyQuery(
    INVOICES
  );

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  return (
    <>
      {called && error?.message === "not authenticated" && (
        <Redirect to="/login" />
      )}
      {error && <div>{error.message}</div>}
      {loading && <div>Loading...</div>}
      {!loading && !error && data && (
        <>
          <S.MainContainer>
            <S.HeaderContainer>
              <S.PageTitleContainer>
                <h1>Invoices</h1>
                <span>
                  {data.data.length > 0
                    ? `${data.data.length} invoices`
                    : "No Invoices"}
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
                <S.EmptyContainer>
                  <S.EmptyImage src={illustrationEmpty} />
                  <S.GetStartedContainer>
                    <p>There is nothing here</p>
                    <p>Create an invoice by clicking the</p>
                    <p>
                      <strong>New Invoice</strong> button and get started
                    </p>
                  </S.GetStartedContainer>
                </S.EmptyContainer>
              )}
            </S.ContentContainer>
          </S.MainContainer>
          <AnimatePresence>
            {editActive && (
              <EditInvoice variant="new" setEditActive={setEditActive} />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
