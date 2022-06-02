import "./pageLayout.css";
interface LayoutProps {
    children: React.ReactNode;
}
const PageLayout = ({ children }: LayoutProps) => {
    return <div className="container">{children}</div>;
};
export default PageLayout;
