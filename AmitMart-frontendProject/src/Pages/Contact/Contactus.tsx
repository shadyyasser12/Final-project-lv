import ContactForm from "../../components/contact/ContactForm";
import SocialLinks from "../../components/common/SocialLinks";

export default function Contactus() {
  return (
    <div className="w-11/12 lg:w-[900px] mx-auto flex flex-col lg:flex-row rounded-3xl transition-colors duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white mt-[90px]">
      <main className="flex-1 flex flex-col items-center justify-center p-10 sm:p-10">
        <ContactForm />
        <SocialLinks />
      </main>
    </div>
  );
}
