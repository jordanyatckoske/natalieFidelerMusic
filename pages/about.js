import MainLayout from "../components/Layouts/MainLayout";
import Head from "next/head";
import {
  attributes,
  react as AboutContent,
} from "../content/work/job-title.md";

export default function About() {
  let {
    position,
    employer,
    location,
    startDate,
    endDate,
    current,
  } = attributes;

  return (
    <MainLayout>
      <h2>About</h2>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div>
        <h4>{position}</h4>
      </div>
    </MainLayout>
  );
}
