<template>
  <div class="relative flex flex-col min-h-screen">
    <!-- Navbar -->
    <AppNavbar
      :imageUrl="menu.imageUrl"
      :hours="menu.hours"
      :contact="menu.contact"
      :layout="menu.layout"
    />
  </div>
  <div class="w-full grow"><slot /></div>

  <!-- Footer -->
  <div class="mt-8">
    <!-- <Footer :layout="footerLayout" /> -->
  </div>
</template>

<script setup lang="ts">
import { type Menu } from "../interfaces/common";

interface Data {
  data: {
    menus: {
      data: Array<Menu>;
    };
    footer: {
      data: {
        attributes: {
          body: object;
        };
      };
    };
  };
}

const graphql = useStrapiGraphQL();

const { data }: Data = await graphql(`
  query ($menu: String) {
    menus(filters: { name: { eq: $menu } }) {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
              }
            }
          }
          hours
          contact
          layout {
            __typename
            ... on ComponentDropdownMenu {
              id
              name
              url
              type
              sections {
                title
                pages {
                  data {
                    attributes {
                      title
                      slug
                    }
                  }
                }
              }
            }
            ... on ComponentCommonLink {
              linkName: name
              url
              icon
            }
          }
        }
      }
    }

    footer {
      data {
        attributes {
          body {
            __typename
            ... on ComponentFooterCard {
              id
              name
              description
            }
            ... on ComponentMenuSection {
              id
              name
              links {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`);

const menu = {
  imageUrl: data.menus.data[0].attributes.logo.data.attributes.url,
  hours: data.menus.data[0].attributes.hours,
  contact: data.menus.data[0].attributes.contact,
  layout: data.menus.data[0].attributes.layout,
};

const footerLayout = data.footer.data.attributes.body;
</script>
