<template>
    <div id="user-page">
        <Header />
        <CompanyMyList />
    </div>
</template>

<script>
import Header from '../Header'
import CompanyMyList from './CompanyMyList'

export default {
    components: {
        Header,
        CompanyMyList
    },
}
</script>