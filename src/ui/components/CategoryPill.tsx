import React from 'react'
import { Category, CategoryCode } from '../../domain/category/Category'
import { IconName } from './Icon'
import { Pill, PillProps } from './Pill'

type CategoryPillProps = {
    category: Category
} & Pick<PillProps, 'active' | "onPress">

export function CategoryPill({ category, ...pillProps }: CategoryPillProps) {
    return (
        <Pill iconName={categoryIconMap[category.code]} label={category.name} {...pillProps} />
    )
}

const categoryIconMap: Record<CategoryCode, IconName> = {
    ADVENTURE: 'Adventure',
    BEACH: 'Beach',
    CULTURE: 'Culture',
    FAVORITE: 'Star',
    GASTRONOMY: 'Gastronomy',
    HISTORY: 'History',
    LUXURY: 'Luxury',
    NATURE: 'Nature',
    SHOPPING: 'Shopping',
    URBAN: 'Urban'
}