import { useState } from "react";
import { ScrollView } from "react-native";
import { Box } from "../components/Box";
import { CategoryPill } from "../components/CategoryPill";
import { SearchInput } from "../components/SearchInput";
import { Category } from "../types";

type CityFilterProps = {
    categories: Category[]
}
export function CityFilter({ categories }: CityFilterProps) {
    const [name, setName] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    return (
        <Box>
            <Box paddingHorizontal="padding">
                <SearchInput value={name} onChangeText={setName} placeholder='Qual o seu destino?' />
            </Box>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                <Box flexDirection="row" mt="s16" gap="s8" paddingHorizontal="padding">
                    {categories.map((category) => (<CategoryPill key={category.id} category={category} active={category.id === selectedCategory} />))}
                </Box>
            </ScrollView>
        </Box>
    )
}