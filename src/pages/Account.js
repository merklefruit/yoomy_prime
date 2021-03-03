import { useState } from "react";
import styled from "styled-components";
import Layout from "components/layout/Layout";

import { TabView, TabPanel } from "primereact/tabview";
import { Dropdown } from "primereact/dropdown";

// Settings sections
import Generale from "components/account/Generale";
import Password from "components/account/Password";
import Notifiche from "components/account/Notifiche";
import Pagamenti from "components/account/Pagamenti";
import Registro from "components/account/Registro";

const Account = () => {
  const [tab, setTab] = useState(0);
  const tabs = [
    { label: "Generale", value: 0 },
    { label: "Password", value: 1 },
    { label: "Notifiche", value: 2 },
    { label: "Pagamenti", value: 3 },
    { label: "Registro", value: 4 },
  ];

  return (
    <Layout title="Account">
      <CAccount>
        <h2>Il tuo Account</h2>
        <p style={{ maxWidth: "850px" }}>
          Qui puoi trovare tutte le tue informazioni e configurare il tuo
          account. Inoltre, puoi visualizzare le tue ultime transazioni e
          aggiornare il tuo metodo di pagamento.
        </p>

        <div className="desktop-tabs p-mt-4">
          <TabView activeIndex={tab} onTabChange={(e) => setTab(e.index)}>
            <TabPanel header="Generale">
              <Generale />
            </TabPanel>
            <TabPanel header="Password"></TabPanel>
            <TabPanel header="Notifiche"></TabPanel>
            <TabPanel header="Pagamenti"></TabPanel>
            <TabPanel header="Registro"></TabPanel>
          </TabView>
        </div>

        <div className="mobile-select p-mt-4">
          <Dropdown
            style={{ width: "100%" }}
            value={tab}
            options={tabs}
            onChange={(e) => setTab(e.value)}
            placeholder={tabs[0].label}
          />
          {tab === 0 && <Generale />}
          {tab === 1 && <Password />}
          {tab === 2 && <Notifiche />}
          {tab === 3 && <Pagamenti />}
          {tab === 4 && <Registro />}
        </div>
      </CAccount>
    </Layout>
  );
};
export default Account;

const CAccount = styled.div`
  margin-bottom: 6rem;

  .desktop-tabs {
    @media (max-width: 650px) {
      display: none;
    }
    display: block;
  }
  .mobile-select {
    @media (max-width: 650px) {
      display: block;
    }
    display: none;
  }
`;
