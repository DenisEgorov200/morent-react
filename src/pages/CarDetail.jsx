import { Layout } from 'components/layout/Layout.jsx';
import { PrimaryButton } from 'ui/PrimaryButton.jsx';

export const CarDetail = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-x-11 py-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3 p-6 bg-primary-500 text-white font-medium rounded-ten max-md:hidden">
            <div className="max-w-[400px]">
              <h2 className="text-3xl font-semibold mb-4">
                Sports car with the best design and acceleration
              </h2>
              <p className="max-w-[284px] mb-8">
                Safety and comfort while driving a futuristic and elegant sports car
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/herocar.png" alt="car" />
            </div>
          </div>
          <div>
            <img src="/car.png" alt="" />
          </div>
          <div>
            <img src="/car.png" alt="" />
          </div>
          <div>
            <img src="/car.png" alt="" />
          </div>
        </div>
        <div className="px-6 pt-6 pb-8 bg-white rounded-ten text-secondary-400">
          <h2 className="text-3xl text-secondary-500 font-bold">Nissan GT - R</h2>
          <div className="flex items-center mb-8">
            <span className="mr-2">*****</span>
            <p className="text-sm font-medium">440+ Reviewer</p>
          </div>
          <p className="text-xl leading-10 mb-8">
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the
            most unforgiving proving ground, the "race track".
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-11 mb-16">
            <div className="flex items-center justify-between capitalize">
              <span className="text-xl text-secondary-300">type car</span>
              <span className="text-xl font-semibold">sport</span>
            </div>
            <div className="flex items-center justify-between capitalize">
              <span className="text-xl text-secondary-300">steering</span>
              <span className="text-xl font-semibold">manual</span>
            </div>
            <div className="flex items-center justify-between capitalize">
              <span className="text-xl text-secondary-300">capacity</span>
              <span className="text-xl font-semibold">2 person</span>
            </div>
            <div className="flex items-center justify-between capitalize">
              <span className="text-xl text-secondary-300">gasoline</span>
              <span className="text-xl font-semibold">70L</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col text-secondary-300 font-bold">
              <p>
                <span className="text-2xl text-secondary-500">$80.00/</span> days
              </p>
              <p className="line-through">$100.00</p>
            </div>
            <PrimaryButton label="Rent Now" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
