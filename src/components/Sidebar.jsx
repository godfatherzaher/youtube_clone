import { Stack } from "@mui/system";
import { categories } from "../utils/constants";



const Sidebar = ({selectedCategory, setselectedCategory}) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    onClick={() => setselectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && "#FC1503",
                        color: "white"
                    }}
                    key={category.name}
                >
                    <span style={{
                        color: category.name === selectedCategory
                            ? "white" : "red"
                        , marginRight: "15px"
                    }}>{category.icon}</span>
                    <span style={{
                        opacity: category.name === selectedCategory
                            ? '1' : "0.8",
                    }}>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar;