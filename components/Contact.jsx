import React from 'react';
import Title from "./Title";
import { EnvelopeIcon, PhoneIcon, HomeIcon } from '@heroicons/react/24/outline'
import Envelope from "./Envelope";


const Contact = () => {
    return (

          <div id={`contact`} className={`pt-32 flex flex-col justify-center items-center gap-6 w-full`}>
              <Title title={'Contact'}/>
              <div className=" mx-auto max-w-7xl lg:grid">
                      <div className={` bg-slate-50 rounded-lg py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 `}>
                          <div className="mx-auto max-w-lg text-center lg:text-start">


                              <dl className="mt-8 text-base text-slate-500">
                                  <div>
                                      <dt className="sr-only">Postal address</dt>
                                      <dd  className="flex justify-center lg:justify-start">
                                          <HomeIcon  className="h-6 w-6 flex-shrink-0 text-slate-500" aria-hidden="true" />
                                         <div  className="ml-3 ">
                                             <p>FemS Hair & Beautysalon</p>
                                             <p>Arp Schnitgerhof 42</p>
                                             <p>9981LC Uithuizen</p>
                                         </div>
                                      </dd>
                                  </div>
                                  <div className="mt-6 text-base">
                                      <dt className="sr-only">Phone number</dt>
                                      <dd className="flex justify-center lg:justify-start">
                                          <PhoneIcon className="h-6 w-6 flex-shrink-0 text-slate-500" aria-hidden="true" />
                                          <span className="ml-3">0630652105</span>
                                      </dd>
                                  </div>
                                  <div className="mt-3 ">
                                      <dt className="sr-only">Email</dt>
                                      <dd className="flex justify-center lg:justify-start">
                                          <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-slate-500" aria-hidden="true" />
                                          <span className="ml-3 ">femshairandbeautysalon@gmail.com</span>
                                      </dd>
                                  </div>
                              </dl>

                          </div>
                      </div>

                  </div>


          </div>

    );
};

export default Contact;
