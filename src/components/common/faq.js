import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "#1 How do I participate in IDOs?",
    answer: "Just click one of the column of the projects that you interested in above.",
  },
  {
    question: "#2 What are the steps of an IDO?",
    answer: "Preparation, Deposit, Claim Token",
  },
  {
    question: "#3 What is First Come First Serve (FCFS) sale? And who can participate in it?",
    answer:
      "If a pool is not sold out, FCFS round opens 20 minutes before the sale end. First two rounds - 50% and 100% - are open only for previously registered participants. It includes lottery participants who didn't win. Starting from the round 3 - 200% - all stakers with their level higher than NONE, including non-registered, can participate. All participants get an additional allocation on top of their level allocation: first +50% of base allocation, then +100%, then +200%. Non-registered participants get only the percent on top, without the base allocation. Whitelist winners DO NOT get an additional allocation.",
  },
  {
    question: "#4 When will I find out about my allocation?",
    answer: "When the pre-sale ends, there are claim button where you can claim your token.",
  },
  {
    question: "#5 How long do I have to fund my IDO allocation?",
    answer:
      "The time based on the timeline that has been set by pool originators, you can see it on detail page for particular IDO project.",
  },
  {
    question: "#6 What can I fund my allocation with?",
    answer: "Most likely with BUSD/WBNB.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Faq() {
  return (
    <div id="faq" className="dark:bg-dark">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-800">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-600 dark:text-gray-50 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-800">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left dark:text-gray-50">
                        <span className="font-medium dark:text-gray-100">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? "-rotate-180" : "rotate-0", "h-6 w-6 transform")}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
