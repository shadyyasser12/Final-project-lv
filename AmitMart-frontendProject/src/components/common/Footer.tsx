export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm mt-10 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-4">
        <p>&copy; {new Date().getFullYear()} AmitMart. All rights reserved.</p>
        <p>
          This website is built by{" "}
          <span className="font-semibold text-new-price">Shady Yasser</span>.
        </p>
        <p>
          For inquiries or support, contact us at{" "}
          <a
            href="mailto:support@amitmart.com"
            className="underline hover:text-new-price"
          >
            support@amitmart.com
          </a>
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500">
          Terms & Conditions · Privacy Policy · Cookie Preferences
        </p>
      </div>
    </footer>
  );
}
