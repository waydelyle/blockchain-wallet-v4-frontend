import { SkeletonRectangle } from 'blockchain-info-components'
import React from 'react'
import styled from 'styled-components'

const BalanceSkeleton = styled.div`
  flex: 1;
  display: flex;
  padding: 10px 20px;
  @media (min-width: 768px) {
    padding: 15px 30px;
  }
`
const SkeletonTable = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export default () => (
  <BalanceSkeleton>
    <SkeletonTable>
      <SkeletonRectangle width='40%' height='70px' bgColor='gray-1' />
      <SkeletonRectangle width='100%' height='35px' bgColor='gray-1' />
      <SkeletonRectangle width='100%' height='35px' bgColor='gray-1' />
      <SkeletonRectangle width='100%' height='35px' bgColor='gray-1' />
    </SkeletonTable>
  </BalanceSkeleton>
)
