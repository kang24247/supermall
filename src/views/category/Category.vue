<template>
  <div class="category" ref="aaa">
    <ul class="scrollSpace">
      <li>参数列表1</li>
      <li>参数列表2</li>
      <li>参数列表3</li>
      <li>参数列表4</li>
      <li>参数列表5</li>
      <li>参数列表6</li>
      <li>参数列表7</li>
      <li>参数列表8</li>
      <li>参数列表9</li>
      <li>参数列表10</li>
      <li>参数列表11</li>
      <li>参数列表12</li>
      <li>参数列表13</li>
      <li>参数列表14</li>
      <li>参数列表15</li>
      <li>参数列表16</li>
      <li>参数列表17</li>
      <li>参数列表18</li>
      <li>参数列表19</li>
      <li>参数列表20</li>
      <li>参数列表21</li>
      <li>参数列表22</li>
      <li>参数列表23</li>
      <li>参数列表24</li>
      <li>参数列表25</li>
      <li>参数列表26</li>
      <li>参数列表27</li>
      <li>参数列表28</li>
      <li>参数列表29</li>
      <li>参数列表30</li>
      <li>参数列表31</li>
      <li>参数列表32</li>
      <li>参数列表33</li>
      <li>参数列表34</li>
      <li>参数列表35</li>
      <li>参数列表36</li>
      <li>参数列表37</li>
      <li>参数列表38</li>
      <li>参数列表39</li>
      <li>参数列表40</li>
      <li>参数列表41</li>
      <li>参数列表42</li>
      <li>参数列表43</li>
      <li>参数列表44</li>
      <li>参数列表45</li>
      <li>参数列表46</li>
      <li>参数列表47</li>
      <li>参数列表48</li>
      <li>参数列表49</li>
      <li>参数列表50</li>
      <li>参数列表51</li>
      <li>参数列表52</li>
      <li>参数列表53</li>
      <li>参数列表54</li>
      <li>参数列表55</li>
      <li>参数列表56</li>
      <li>参数列表57</li>
      <li>参数列表58</li>
      <li>参数列表59</li>
      <li>参数列表60</li>
      <li>参数列表61</li>
      <li>参数列表62</li>
      <li>参数列表63</li>
      <li>参数列表64</li>
      <li>参数列表65</li>
      <li>参数列表66</li>
      <li>参数列表67</li>
      <li>参数列表68</li>
      <li>参数列表69</li>
      <li>参数列表70</li>
      <li>参数列表71</li>
      <li>参数列表72</li>
      <li>参数列表73</li>
      <li>参数列表74</li>
      <li>参数列表75</li>
      <li>参数列表76</li>
      <li>参数列表77</li>
      <li>参数列表78</li>
      <li>参数列表79</li>
      <li>参数列表80</li>
      <li>参数列表81</li>
      <li>参数列表82</li>
      <li>参数列表83</li>
      <li>参数列表84</li>
      <li>参数列表85</li>
      <li>参数列表86</li>
      <li>参数列表87</li>
      <li>参数列表88</li>
      <li>参数列表89</li>
      <li>参数列表90</li>
      <li>参数列表91</li>
      <li>参数列表92</li>
      <li>参数列表93</li>
      <li>参数列表94</li>
      <li>参数列表95</li>
      <li>参数列表96</li>
      <li>参数列表97</li>
      <li>参数列表98</li>
      <li>参数列表99</li>
      <li>参数列表100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Category',
  data () {
    return {
      scroll:null  
    }
  },
  mounted () {
    this.scroll = new BScroll(document.querySelector('.category'),{
        probeType:3,
        pullUpLoad:true
    })
    this.scroll.on('scroll',position=>{
        // console.log(position);
    })
    this.scroll.on('pullingUp',()=>{
      console.log('已经到底了，上拉加载更多');
      // 发送网络请求
      // 处理数据
      setTimeout(()=>{
          // this.finishPullUp()
      },3000)
    })
  }
}
</script>

<style>
  .category{
    height: 200px;
    background-color: #bfa;
    overflow: hidden;
  }
  /* body{
    padding-top: 0;
  } */
  /* .scrollSpace{
    height: 200px;
    background-color: #bfa;
    overflow: hidden;
  } */
    /* overflow-y: scroll; */
</style>