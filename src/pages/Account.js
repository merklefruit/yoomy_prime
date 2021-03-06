import { useState } from "react";
import styled from "styled-components";
import Layout from "components/layout/Layout";

import { TabView, TabPanel } from "primereact/tabview";
import { Divider } from "primereact/divider";
import { Dropdown } from "primereact/dropdown";

// Settings sections
import Generale from "components/account/Generale";
import Password from "components/account/Password";
import Notifiche from "components/account/Notifiche";
import Pagamenti from "components/account/Pagamenti";
import Supporto from "components/account/Supporto";

const Account = () => {
  const [tab, setTab] = useState(0);
  const tabs = [
    { label: "Generale", value: 0 },
    { label: "Password", value: 1 },
    { label: "Notifiche", value: 2 },
    { label: "Pagamenti", value: 3 },
    { label: "Supporto", value: 4 },
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
            <TabPanel header="Password">
              <Password />
            </TabPanel>
            <TabPanel header="Notifiche">
              <Notifiche />
            </TabPanel>
            <TabPanel header="Pagamenti">
              <Pagamenti />
            </TabPanel>
            <TabPanel header="Supporto">
              <Supporto />
            </TabPanel>
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
          <Divider />
          {tab === 0 && <Generale />}
          {tab === 1 && <Password />}
          {tab === 2 && <Notifiche />}
          {tab === 3 && <Pagamenti />}
          {tab === 4 && <Supporto />}
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
