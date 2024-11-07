import partnerData from "../Partner/partner.json";

interface Partner {
  id: number;
  label: string;
  link: string;
  image: string;
  detail: string;
}

const Partner = () => {
  const partners: Partner[] = partnerData.partners;

  return (
    <div className="flex flex-col items-center p-4 m-4 rounded-md bg-gray-700">
      <h1 className="text-orange-500 text-center text-3xl font-bold mb-6">Partner</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 m-4 max-w-xs"
          >
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <img
                src={partner.image}
                alt={partner.label}
                className="mb-2 rounded"
              />
              <span className="text-orange-500 font-semibold text-lg">{partner.label}</span>
            </a>
            {partner.detail && (
              <p className="text-gray-600 mt-2">{partner.detail}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
