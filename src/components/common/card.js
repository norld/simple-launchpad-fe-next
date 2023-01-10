import { BASE_API_URL } from "src/configs/constants";
import ProgressBarMenu from "./progressBarMenu";
import moment from "moment";
import Link from "next/link";
const products = [
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt: "Black machined steel pen with hexagonal grip and small white logo at top.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
  // More products...
];

export default function Card({ item }) {
  console.log("@item", item);
  return (
    <div id="product-list" className="dark:bg-dark">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-gray-100">Listing</h2>
          <a href="#" className="hidden text-sm font-semibold text-orange-600 hover:text-orange-500 sm:block">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {item.data.map((product, i) => (
                <>
                  <Link
                    key={product.id + i}
                    href={`/detail/${product.id}`}
                    className="flex flex-col rounded-lg p-4 dark:bg-bgDark border"
                    role="button"
                  >
                    <div className="pe-pointer my-3">
                      <div className="statuses">
                        <div className={"d-flex align-items-center"}>
                          <p className="statusText">Progress</p>
                        </div>
                        <div className="status2">
                          <p className="statusText">Audited</p>
                        </div>
                      </div>
                      <div className="logoAndTitleBox">
                        <div className="logoBox">
                          <div style={{ position: "relative" }}>
                            <img className="w80" src={BASE_API_URL + product.tokenInfo.tokenLogo.formats.thumbnail.url} alt="chain logo" />
                            <img
                              src={BASE_API_URL + product.tokenInfo.tokenLogo.formats.thumbnail.url}
                              alt="chain logo"
                              style={{
                                position: "absolute",
                                bottom: "0",
                                right: "0",
                                height: "40px",
                              }}
                            />
                          </div>
                        </div>
                        <div className="titleBox">
                          <p className="titleBox1">{product.tokenInfo.tokenSymbol}</p>
                          <p className="titleBox2">{product.tokenInfo.tokenName}</p>
                        </div>
                        <div className="otherLogoBox">
                          <a href={product.linkContract}>
                            <img src={`/icon/bsc.svg`} alt="contract" />
                          </a>
                          <a href={product.linkWebsite}>
                            <img src={`/icon/bsc.svg`} alt="website" />
                          </a>
                          <a href={product.linkWhitepaper}>
                            <img src={`/icon/bsc.svg`} alt="whitepaper" />
                          </a>
                        </div>
                      </div>
                      <div className="launchpadInfo mt-3">
                        <div className="boxDetail">
                          <p className="stackingInfoTitle">Soft-Hard</p>
                          <span className="h6">
                            {product.softCap} - {product.hardCap}
                          </span>
                        </div>
                        <div className="boxDetail">
                          <p className="stackingInfoTitle">Starts</p>
                          <p>{moment(product.launchDate).format("DD MMMM YYYY")}</p>
                        </div>
                        <div className="boxDetail">
                          <p className="stackingInfoTitle">Price</p>

                          <p className="h6">
                            1 {product.tokenInfo.tokenSymbol} = {product.priceLaunch} BUSD
                          </p>
                        </div>
                      </div>
                      <ProgressBarMenu item={product} />
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex px-4 sm:hidden">
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
