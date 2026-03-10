import React from "react";
import { Page, Layout, LegacyCard, DataTable, Spinner, Text } from "@shopify/polaris";
import userApiRequest from "../hooks/userApiRequest";

function User() {

  const { responseData, isLoading, error } = userApiRequest("/api/getusers", "GET");

  const rows = responseData
    ? responseData.map((user) => [user.username, user.usermail])
    : [];

  return (
    <Page fullWidth>
      <Layout sectioned>
        <Layout.Section>
          <LegacyCard title="Users List" sectioned>

            {isLoading && (
              <div style={{textAlign:"center"}}>
                <Spinner accessibilityLabel="Loading users" size="large" />
              </div>
            )}

            {error && <Text color="critical">Error loading users</Text>}

            {!isLoading && !error && (
              <DataTable
                columnContentTypes={["text", "text"]}
                headings={["Name", "Email"]}
                rows={rows}
              />
            )}

          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default User;