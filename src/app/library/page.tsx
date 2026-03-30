import BreadCrumb from "@/components/library/bread-crumbs/BreadCrumb";
import PageHeader from "@/components/library/page-header/PageHeader";
import Filter from "@/components/shared/filter/Filter";

const LibraryPage = () => {
    return (
        <main>
            <BreadCrumb/>
            <PageHeader/>
            <Filter/>
        </main>
    )
};

export default LibraryPage;