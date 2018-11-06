import Vue from 'vue';
import Collapse from '../collapse.vue';

// 挂载元素并返回已渲染的文本的工具函数
function getRenderedText(Component, propsData) {
	const Constructor = Vue.extend(Component);
	const vm = new Constructor({
		propsData
	}).$mount();
	return vm;
}

describe('Collapse', () => {
	test('测试传递属性', () => {
		const component = getRenderedText(
			Collapse
		);
		expect(typeof component).toBe('object');
	});
});