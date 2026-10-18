export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <a href="/" className="text-primary underline text-sm">&larr; Back to Heaven of Munroe</a>
        <h1 className="font-serif text-4xl font-bold mt-4 mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: 2 October 2026</p>

        <div className="space-y-6 leading-relaxed">
          <section>
            <h2 className="font-semibold text-xl mb-2">Who we are</h2>
            <p>Heaven of Munroe runs kayaking, canal boating, houseboat and homestay experiences at Munroe Island, Kerala. This policy explains what we do with the personal data you give us on this website, in line with the Digital Personal Data Protection Act, 2023 (India).</p>
          </section>
          <section>
            <h2 className="font-semibold text-xl mb-2">What we collect and why</h2>
            <p>When you send a booking inquiry we collect your name, email, phone number, number of guests, dates, preferred experiences or package, and any special requests you write. We use this only to reply to you and arrange your booking. Sending the form is your consent for this purpose.</p>
            <p className="mt-2">The contact form collects your name, email and message, used only to answer you.</p>
          </section>
          <section>
            <h2 className="font-semibold text-xl mb-2">Who can use this website</h2>
            <p>Bookings are for adults. You must confirm you are 18 or older, or a parent or guardian booking for a minor, before sending an inquiry. We do not knowingly collect data directly from children. If you think a child has sent us their details, write to us and we will delete them.</p>
          </section>
          <section>
            <h2 className="font-semibold text-xl mb-2">Storage and sharing</h2>
            <p>Inquiries are stored in our database. We do not sell your data and do not run advertising or session-recording tools on this site. Our hosting and database providers process data on our behalf. Images and icons on the site load from third-party servers (such as Unsplash and cdnjs), which can see your IP address when you load the page. Fonts are served from our own site.</p>
          </section>
          <section>
            <h2 className="font-semibold text-xl mb-2">How long we keep it</h2>
            <p>We keep inquiry details only as long as needed to handle your booking and our records, then delete them.</p>
          </section>
          <section>
            <h2 className="font-semibold text-xl mb-2">Your rights and grievances</h2>
            <p>You can ask to see, correct or delete your data, or withdraw consent, at any time. Write to our Grievance Officer at <a className="underline text-primary" href="mailto:info@heavenofmunroe.com">info@heavenofmunroe.com</a>. We acknowledge within 72 hours and resolve within 15 days.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
