import { footerLinks } from 'constants/constants.jsx';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between pt-20 pl-[60px] pr-8 bg-white">
      <div className="w-full flex justify-between pb-9 border-b-[1px] border-[#13131329]">
        <div className="max-w-[300px]">
          <h2 className="title mb-4">MORENT</h2>
          <span className="font-medium">
            Our vision is to provide convenience and help increase your sales business.
          </span>
        </div>
        <div className="flex items-center gap-x-[60px]">
          {footerLinks.map((linksItems) => (
            <div key={linksItems.id} className="flex flex-col">
              <h3 className="text-xl font-semibold text-secondary-500 mb-6">{linksItems.title}</h3>
              <ul className="flex flex-col gap-y-8">
                {linksItems.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-between pt-9 pb-[60px] font-semibold text-secondary-500">
        <span>©2022 MORENT. All rights reserved</span>
        <div>
          <a href="#" className="mr-[60px]">
            Privacy & Policy
          </a>
          <a href="#">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};
