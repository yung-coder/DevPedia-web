import React from "react"

const ContactPage = () => {
  return (
    <div className="container flex flex-col gap-4 pb-12 pt-4  order-4 border-indigo-500/100  lg:items-center lg:gap-8 lg:py-20">
      <div>
        <p className="font-regular mt-4 text-sm uppercase leading-7">Contact</p>
        <h3 className="text-3xl font-extrabold leading-normal tracking-tight sm:text-4xl">
          Get In <span className="text-indigo-600">Touch</span>
        </h3>
      </div>
      <div className="mx-auto grid max-w-4xl items-center gap-16 rounded-md bg-[#111827] p-8 font-[sans-serif] text-white sm:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold">Let's Talk</h1>
          <p className="mt-3 text-sm text-gray-400">
             To know more about our services, please contact us through the following email addresses.
            </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3 flex flex-col space-y-4">
              <li className="flex items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a
                  href="javascript:void(0)"
                  className="ml-3 text-sm text-[#007bff]"
                >
                  <small className="block">Mail</small>
                  <strong>Hasnainmakada@gmail.com</strong>
                </a>
              </li>
              <li className="flex items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6cf]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a
                  href="javascript:void(0)"
                  className="ml-3 text-sm text-[#007bff]"
                >
                  <small className="block">Mail</small>
                  <strong>Chandel_Saksham@proton.me</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
