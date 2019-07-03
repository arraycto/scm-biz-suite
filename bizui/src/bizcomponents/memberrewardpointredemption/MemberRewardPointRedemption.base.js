import React from 'react'
import { Icon,Divider } from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell


const menuData = {menuName:"会员奖励点赎回", menuFor: "memberRewardPointRedemption",
  		subItems: [
  
  		],
}

const fieldLabels = {
  id: '序号',
  name: '名称',
  point: '点',
  owner: '业主',

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.name, debugtype: 'string', dataIndex: 'name', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.point, debugtype: 'int', dataIndex: 'point', width: '6',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.owner, dataIndex: 'owner', render: (text, record) => renderReferenceCell(text, record), sorter:true},

]
// refernce to https://ant.design/components/list-cn/
const renderItemOfList=(memberRewardPointRedemption,targetComponent)=>{

	
	
	
	const userContext = null
	return (
	<div key={memberRewardPointRedemption.id}>
	
	<DescriptionList  key={memberRewardPointRedemption.id} size="small" col="4">
<Description term="序号">{memberRewardPointRedemption.id}</Description> 
<Description term="名称">{memberRewardPointRedemption.name}</Description> 
<Description term="点">{memberRewardPointRedemption.point}</Description> 
<Description term="业主">{memberRewardPointRedemption.owner==null?appLocaleName(userContext,"NotAssigned"):`${memberRewardPointRedemption.owner.displayName}(${memberRewardPointRedemption.owner.id})`}
</Description>
	
        
      </DescriptionList>
       <Divider style={{ height: '2px' }} />
      </div>
	)

}
	



const MemberRewardPointRedemptionBase={menuData,displayColumns,fieldLabels,renderItemOfList}
export default MemberRewardPointRedemptionBase



