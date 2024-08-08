import Layout from "./Layout/Layout";
import Title from "./Title/Title";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

export default function App() {
  return (
    <Layout>
      <Title />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Layout>
  );
}
