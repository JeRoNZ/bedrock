import Icon from '../../assets/cms/components/Icon.vue'
import Vue from 'vue'

Vue.component('Icon', Icon)

export default {
    title: 'Components/Icon',
    component: Icon
}

export const basicUsage = () => ({
    template: `
        <div>
            <p>With fontawesome solid icons</p>
            <Icon icon="fa-trash" icon-type="fontawesome-solid" icon-color="#7F7F7F"/>    
            
            <p>With fontawesome regular icons</p>
            <Icon icon="fa-trash-alt" icon-type="fontawesome-regular" icon-color="#7F7F7F"/>    
            
            <p>With fontawesome brand icons</p>
            <Icon icon="fa-vuejs" icon-type="fontawesome-brand" icon-color="#41b883"/>
        </div>
    `
})
