import { CheckCircleIcon } from "@heroicons/react/20/solid";
const steps = [
  { name: "Token Info", href: "#", status: "complete" },
  { name: "Presale Info", href: "#", status: "current" },
  { name: "Social Media", href: "#", status: "upcoming" },
];
export default function Example() {
  return (
    <>
      <div className="isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-8">
          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="py-12 px-4 sm:px-6 lg:px-8">
                  <nav className="flex justify-center" aria-label="Progress">
                    <ol role="list" className="space-y-6">
                      {steps.map((step) => (
                        <li key={step.name}>
                          {step.status === "complete" ? (
                            <a href={step.href} className="group">
                              <span className="flex items-start">
                                <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                                  <CheckCircleIcon
                                    className="h-full w-full text-indigo-600 group-hover:text-indigo-800"
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                              </span>
                            </a>
                          ) : step.status === "current" ? (
                            <a href={step.href} className="flex items-start" aria-current="step">
                              <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                                <span className="absolute h-4 w-4 rounded-full bg-indigo-200" />
                                <span className="relative block h-2 w-2 rounded-full bg-indigo-600" />
                              </span>
                              <span className="ml-3 text-sm font-medium text-indigo-600">{step.name}</span>
                            </a>
                          ) : (
                            <a href={step.href} className="group">
                              <div className="flex items-start">
                                <div className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                                  <div className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                                </div>
                                <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</p>
                              </div>
                            </a>
                          )}
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Chain *
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Token Address
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Token Name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Token Symbol
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Token Supply
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Token Decimal
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Supply for Presale
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Supply for Liquidity
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="you@example.com"
                            defaultValue={""}
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>

                {/* Presale Info */}
                <form action="#" method="POST">
                  <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Currency *
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Sale Type *
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>Public</option>
                          <option>Private</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Softcap *
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Hardcap *
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Minimum Buy *
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Maximum Buy *
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Listing on *
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Price IDO (per 1 token) *
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Price Launch (per 1 token) *
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
                {/* Social Media */}
                <form action="#" method="POST">
                  <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Facebook *
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Twitter *
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Telegram *
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Discord *
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Website *
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Link Whitepaper
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}
