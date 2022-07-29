import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Business({ data }) {
  async function contact(id) {
    await fetch(`/api/delete/${id}`);
    window.open(mountedMessage, '_blank');
  }
  const mountedMessage = `https://web.whatsapp.com/send?phone=${data.phoneNumber.replace(/\D/g, "")}&text=%F0%9F%91%8B%20Ol%C3%A1%2C%20tudo%20bem%3F%0A%0AVoc%C3%AA%20sabia%20que%20a%20sua%20empresa%20(${data.title})%20est%C3%A1%20deixando%20de%20lado%20mais%20de%20${Math.round(Math.random()*100)+100}%20potenciais%20clientes%20mensais%20em%20${data.city}%3F%0A%0AJ%C3%A1%20imaginou%20quanto%20dinheiro%20est%C3%A1%20perdendo%20todos%20os%20meses%2C%20s%C3%B3%20porque%20essas%20pessoas%20est%C3%A3o%20encontrando%20seus%20concorrentes%20com%20mais%20facilidade%20do%20que%20voc%C3%AA%20pela%20internet%3F%0A%0AMeu%20nome%20%C3%A9%20Amanda%2C%20e%20sou%20especialista%20em%20auxiliar%20empresas%20do%20ramo%20de%20${data.type}%20a%20aumentar%20o%20faturamento%20e%20alcançando%20e%20recuperando%20esses%20clientes%20espec%C3%ADficos.%20%0A%0APor%20aqui%2C%20eu%20falo%20com%20o%20respons%C3%A1vel%20pela%20${data.title}%3F`

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 leading-relaxed">
      <div className="flex flex-col md:flex-row justify-between px-4">
        <div className="px-4 py-5 sm:px-6">
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
          <Link href={data.url}>
            <h1 className="text-xl font-medium leading-relaxed cursor-pointer">
              {data.title}{" "}
            </h1>
          </Link>
          <div className="flex-col md:flex-row flex">
            <div className="flex">
              {Array.from(
                { length: Math.floor(data.rating) },
                (_, i) => i + 1
              ).map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    "text-yellow-400",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
              {Array.from(
                { length: 5 - Math.floor(data.rating) },
                (_, i) => i + 1
              ).map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    "text-gray-300",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}{" "}
              <p className="text-sm ml-2">{data.type}</p>
            </div>
          </div>
          <p className="ml-2">
            {data.rating} de 5 ( {data.reviews} Comentário
            {data.reviews > 1 ? "s" : ""} )
          </p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <p className="">{data.fullAddress}</p>
        </div>
        <div className="flex justify-center items-center">
          {!data.exported && <button
            className="bg-teal-700 text-white px-8 py-4 rounded-xl cursor-pointer"
            onClick={() => {
              contact(data._id);
            }}
          >
            Entrar em contato
          </button> }
          
        </div>
      </div>
    </div>
  );
}
