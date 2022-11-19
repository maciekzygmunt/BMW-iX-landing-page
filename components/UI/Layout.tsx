import { Header } from './Header';

interface LayoutTypes {
  children: JSX.Element;
}

export const Layout = ({ children }: LayoutTypes) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full text-black">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};
