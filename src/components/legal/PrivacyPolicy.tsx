import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const LAST_UPDATED = 'November 13, 2026';

// The live /privacy/ and /terms/ pages are served server-rendered by the
// fleet-legal-pages worker (Oak-Main/fleet-proxy-workers). Keep this text in
// step with it; the footer links load that version directly.

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy — Keepsake Almanac';
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
      <div className="bg-white/90 rounded-2xl p-6 sm:p-10 border border-amber-200/80 shadow-sm space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-2xl font-serif-title font-bold text-stone-900">Privacy Policy</h1>
            <p className="text-xs text-stone-500">Last updated {LAST_UPDATED}</p>
          </div>
        </div>

        <div className="font-garamond text-base leading-relaxed space-y-5 text-stone-800">
          <p>
            Keepsake Almanac is operated by <strong>Oak and Main Developers LLC</strong>
            ("Oak and Main Developers," "we," "us," or "our"), 1223 Cleveland Ave, Suite 200,
            San Diego, CA 92103.
            This policy explains what information Keepsake Almanac (the "Service") collects,
            how it is used, and the choices you have. It describes the Service's actual,
            current behavior — not a generic template.
          </p>

          <h2 className="text-lg font-serif-title font-bold text-stone-900 mt-6">What We Collect</h2>
          <p>
            Keepsake Almanac does not require an account, and we do not ask for your name or
            email address. The Service handles two kinds of information. The first is what
            <em> you choose to type into it</em>: memory entries, family member details,
            calendar events, and time capsule entries (which may include names, relationships,
            birth/death years, locations, life events, and any photo URLs you provide). The
            second is collected automatically when a page loads: Google Analytics records a
            random cookie identifier, your approximate location, device and browser type, the
            referring page and the pages you view (see Analytics below), and our host,
            Cloudflare, processes your IP address and request details to deliver the site.
          </p>

          <h2 className="text-lg font-serif-title font-bold text-stone-900 mt-6">Where That Information Is Stored</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Locally, in your browser.</strong> Everything you add is saved to your
              browser's <code>localStorage</code> on the device you're using. This is the
              primary copy. It is not automatically synced across devices or browsers, and it
              is removed if you clear your browser's site data.
            </li>
            <li>
              <strong>Sent to our server, then discarded.</strong> When you save a new memory,
              a copy (title, date, category, author, generation, place, story, tags and any
              image link) is also sent to this site's <code>/api/submit-memory</code> endpoint.
              No storage is connected to it today, so the copy is checked and discarded and
              nothing is kept. If we ever connect storage, we will update this policy before
              we do.
            </li>
          </ul>

          <h2 className="text-lg font-serif-title font-bold text-stone-900 mt-6">Third Parties Involved in Loading This Page</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Google Fonts</strong> (fonts.googleapis.com, fonts.gstatic.com) serves the
              typefaces used on this site, under Google's own privacy policy.
            </li>
            <li>
              <strong>Cloudflare</strong> hosts and serves this website and its edge functions.
            </li>
            <li>
              If you provide an "Image URL" when adding a memory, that image loads directly
              from wherever you pointed it — a third party we don't control and whose privacy
              practices we can't speak to.
            </li>
          </ul>

          <h2 className="text-lg font-serif-title font-bold text-stone-900 mt-6">Analytics</h2>
          <p>
            We use Google Analytics 4 (property <code>G-5VKBP1QHV3</code>), added to each page
            as it leaves Cloudflare's network, to count visits and see which pages are read. It
            sets first-party cookies (<code>_ga</code> and <code>_ga_&lt;ID&gt;</code>) that hold
            a random identifier, and it records your approximate location, device and browser
            type, the page that referred you and the pages you view. We do not use it to
            identify you and we do not sell this data. You can block these cookies in your
            browser settings or use Google's opt-out add-on at{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-amber-800 underline underline-offset-4">https://tools.google.com/dlpage/gaoptout</a>.
          </p>

          <h2 className="text-lg font-serif-title font-bold text-stone-900 mt-6">Your Choices</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use "Export All Data" (in the site footer) at any time to download everything you've entered as a single JSON file.</li>
            <li>Clear your browser's site data for this domain to delete your local copy entirely.</li>
            <li>Block Google Analytics cookies in your browser settings or with Google's opt-out add-on.</li>
            <li>Email admin@oakandmain.dev with any privacy question or request.</li>
          </ul>

          <h2 className="text-lg font-serif-title font-bold text-stone-900 mt-6">California Privacy Rights</h2>
          <p>
            Because Oak and Main Developers LLC operates in California, California residents
            have rights under the California Consumer Privacy Act (CCPA), as amended by the
            California Privacy Rights Act (CPRA), with respect to personal information we hold.
            Subject to certain exceptions, you may have the right to: know what personal
            information we have collected about you; request deletion of that information;
            correct inaccurate information; and not be discriminated against for exercising
            these rights. <strong>We do not sell personal information</strong> (as defined
            under the CCPA/CPRA), and we do not use personal information for cross-context
            behavioral advertising. To exercise any of these
            rights, contact us using the details below. Under California Civil Code §1798.83
            ("Shine the Light"), you may also request information about any disclosure of
            personal information to third parties for their own direct marketing purposes —
            we do not make such disclosures.
          </p>

          <h2 className="text-lg font-serif-title font-bold text-stone-900 mt-6">Children's Information</h2>
          <p>
            Keepsake Almanac is not directed at children, and we do not knowingly collect
            personal information from anyone under 13. Because the Service is designed to
            record family history, entries may reference minors (for example, a child's
            birthday in the Heirloom Calendar) — please only include information you have the
            authority to share, and avoid entering a minor's own contact or account
            information.
          </p>

          <h2 className="text-lg font-serif-title font-bold text-stone-900 mt-6">Changes to This Policy</h2>
          <p>
            If how the Service handles data changes — for example, if we add accounts or start
            keeping the copies sent to our server — we will update this page and the "Last
            updated" date above.
          </p>

          <h2 className="text-lg font-serif-title font-bold text-stone-900 mt-6">Contact</h2>
          <p>
            Oak and Main Developers LLC<br />
            1223 Cleveland Ave, Suite 200, San Diego, CA 92103<br />
            admin@oakandmain.dev<br />
            Operating state: California
          </p>
        </div>
      </div>

      <p className="text-center text-sm">
        <a href="/terms/" className="text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-4">
          Terms of Service
        </a>
        <span className="mx-2 text-stone-400">•</span>
        <Link to="/almanac" className="text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-4">
          Back to Keepsake Almanac
        </Link>
      </p>
    </div>
  );
};
