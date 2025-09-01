import { ScrollView } from "react-native";
import { Box } from "../components/Box";
import { CategoryPill } from "../components/CategoryPill";
import { SearchInput } from "../components/SearchInput";
import { Category } from "../types";

type CityFilterProps = {
    categories?: Category[]
    cityName: string
    onChangeCityName: (cityName: string) => void;
    selectedCategoryId: string | null;
    onChangeSelectedCategoryId: (id: string | null) => void;
}
export function CityFilter({ categories, cityName, onChangeCityName, onChangeSelectedCategoryId, selectedCategoryId }: CityFilterProps) {
    return (
        <Box>
            <Box paddingHorizontal="padding">
                <SearchInput value={cityName} onChangeText={onChangeCityName} placeholder='Qual o seu destino?' />
            </Box>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                <Box flexDirection="row" mt="s16" gap="s8" paddingHorizontal="padding">
                    {categories?.map((category) => (<CategoryPill key={category.id} category={category} active={category.id === selectedCategoryId} onPress={() => onChangeSelectedCategoryId(category.id === selectedCategoryId ? null : category.id)} />))}
                </Box>
            </ScrollView>
        </Box>
    )
}