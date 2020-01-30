import Header from "../components/Header";
import MainLayout from "../components/Layouts/MainLayout";
import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default function Index() {
  let { title, cats } = attributes;
  return (
    <MainLayout>
      <p>Hello Next.js</p>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </MainLayout>
  );
}
