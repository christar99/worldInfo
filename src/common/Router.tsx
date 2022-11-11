import { Routes, Route } from "react-router-dom";
import PageNotFound from "pages/PageNotFound";
import WorldNews from "pages/WorldNews";
import Statistics from "pages/Statistics";
import Nations from "pages/Nation";


const Router = () => (
    <Routes>
        <Route path="/" element={<WorldNews />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/nation/:id" element={<Nations />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
)

export default Router;