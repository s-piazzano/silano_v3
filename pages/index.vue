<template>
  <div class="w-full">
    <!--  Header contenente lo slogan -->
    <div class="w-full h-screen">
      <AppHeader
        :title="title"
        :subtitle="subtitle"
        :slogan="slogan"
        :activities="activities"
      />
    </div>
    <!-- Attività dell'azienda -->
    <HeaderActivities :activities="activities" />
    <!-- Mappa Google -->
    <HomepageMaps className="px-4 md:px-16 -mt-80" :height="400" />
  </div>
</template>

<script setup lang="ts">
import { type Activity, type Seo } from "~/interfaces/common";

const { $anime } = useNuxtApp();

interface Data {
  data: {
    homepage: {
      data: {
        id: number;
        attributes: {
          slogan: string;
          subtitle: string;
          title: string;
          activities: Array<Activity>;
          seo: Seo;
        };
      };
    };
  };
}
onMounted(() => {
  let translateY = -180;
  let traslateYActivities = -400;

  let tl = $anime.timeline({
    easing: "easeOutExpo",
    duration: 400,
  });

  tl.add({
    targets: "#homepageSubtitle",
    translateY,
    opacity: 1,
  });
  tl.add({
    targets: "#homepageTitle",
    translateY,
    opacity: 1,
  });
  tl.add({
    targets: "#homepageSlogan",
    translateY,
    opacity: 1,
  });
  /* Se esistono delle activities le inserisco nella timeline di animazione iniziale */
  if (activities && activities.length)
    activities.map((x) =>
      tl.add({
        targets: `#card-${x.id}`,
        translateY: traslateYActivities,
        opacity: 1,
      })
    );
});

const graphql = useStrapiGraphQL();
const { data }: Data = await graphql(`
  query {
    homepage {
      data {
        id
        attributes {
          slogan
          subtitle
          title
          activities {
            id
            title
            description
            image {
              data {
                attributes {
                  url
                  formats
                }
              }
            }
            link {
              name
              url
            }
          }
          seo {
            title
            description
            image {
              data {
                attributes {
                  url
                  formats
                }
              }
            }
          }
        }
      }
    }
  }
`);

const title = data.homepage.data.attributes.title;
const subtitle = data.homepage.data.attributes.subtitle;
const slogan = data.homepage.data.attributes.slogan;
const activities = data.homepage.data.attributes.activities;
</script>
