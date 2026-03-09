import { Layout, LegacyCard } from '@shopify/polaris'
import React from 'react'

export function OrderDetails() {
  return (
    <>
        <Layout>
            <Layout.Section>
                <LegacyCard title="Order Details" sectioned>
                    <p className='text-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta odio expedita, amet numquam, quae omnis quo placeat magnam perspiciatis labore voluptate modi? Sed, libero reprehenderit culpa explicabo in animi?</p>
                </LegacyCard>
            </Layout.Section>
        </Layout>
    </>
  )
}
