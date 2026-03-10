import { Layout, LegacyCard } from '@shopify/polaris'
import React from 'react'

export function Card({
  title,
  data,
  productCard,
  collectionCard,
  orderCard,
  fulfillCard,
  remainsCard,
}) {
  const shouldShowData =
    productCard || collectionCard || orderCard || fulfillCard || remainsCard

  return (
    <Layout.Section oneThird>
      <LegacyCard title={title} sectioned>
        <h1 className="total_count">{shouldShowData ? data : null}</h1>
      </LegacyCard>
    </Layout.Section>
  )
}

