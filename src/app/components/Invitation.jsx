import InvitationSlider from "./InvitationSlider";

export default function Invitation() {
  return (
    <section className="py-10 ">
      <div className="max-w-2xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl font-garamond font-semibold text-gray-700 mb-3">
          Our Wedding Invitation
        </h2>
        <p className="text-gray-500 mb-8">
          With great joy, we invite you to celebrate the union of{" "}
          <span className="font-semibold">Charlo &amp; Patrixia</span>.
          Please join us on our special day as we start this new journey
          together.
        </p>

        {/* Invitation Slider */}
        <InvitationSlider />

        {/* Details */}
        <div className="mt-10 flex flex-col gap-3 text-gray-600">
          <h3 className="text-xl font-garamond font-semibold">Wedding Details Summary</h3>
          <p className="text-gray-500">
            <span className="font-medium">Date:</span> November 25, 2025
          </p>
          <p className="text-gray-500">
            <span className="font-medium">Time:</span> 9 am
          </p>

          <div className="mt-2">
             <p className="text-gray-500 text-sm">
            <span className="font-medium text-sm">Venue:</span>  Caleruega Chapel of Transfiguration
          </p>
          <p className="text-gray-500 italic text-sm">
            Reception to follow at Jardin De Amor Events Place
          </p>
          </div>
         
        </div>
      </div>
    </section>
  );
}
