import Footer from 'components/Layout/Footer/footer'
import ContactUsForm from 'components/Layout/Forms/ContactUsForm'
import Navbar from 'components/Layout/Navbar/navbar'
import React from 'react'

function Contact() {
    return (
        <>
        <Navbar/>
        <div className=" w-full  h-100 flex  from-blue-500 to-purple-400 bg-gradient-to-r">
        <div><section>
        <div class="container mx-auto px-6 py-20">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
       Contact us
          </h2>
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3 px-2 mb-4">
              <div class="bg-white rounded shadow py-2">
                <p class="text-gray-800 text-base px-6 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <p class="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-2 mb-4">
              <div class="bg-white rounded shadow py-2">
                <p class="text-gray-800 text-base px-6 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p>
                <p class="text-gray-500 text-xs md:text-sm px-6">Jane Doe</p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-2 mb-4">
              <div class="bg-white rounded shadow py-2">
                <p class="text-gray-800 text-base px-6 mb-5">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
                <p class="text-gray-500 text-xs md:text-sm px-6">1914 translation by H. Rackham</p>
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
        </div>
        <div className="from-blue-500 to-purple-400 bg-gradient-to-r w-full h-44 block">
        <ContactUsForm/>
        </div>
        <Footer/>
        </>
    )
}

export default Contact
