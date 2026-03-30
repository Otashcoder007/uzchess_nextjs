import Filter from "@/components/shared/filter/Filter";
import PageHeader from "@/components/courses/page-header/PageHeader";

const Main = () => {
    return (
        <>
            <div className={''}>
                <PageHeader/>
                <Filter/>
            </div>
        </>
    )
};

export default Main;