import { Primitives } from '../src/primitives';
import { Attribute, DataAttribute } from './../src/classes/Attribute';
import { Block, BlockOptions } from '../src/classes/Block';
import { Serializer } from '../src/classes/Serializer';

const testBlock = new Block('test-block');

it("should use the options label if it is provided", () => {
	const testBlock = new Block('test-block', {
		label: 'test label',
	});

	expect(testBlock.label).toBe('test label');
});

it('should emit an event when label is changed', () => {
	const callback = jest.fn();
	testBlock.events.on('change:label', callback);

	testBlock.label = 'new label';

	expect(callback).toHaveBeenCalledWith('new label');
});

it('should emit an event when position is changed', () => {
	const callback = jest.fn();

	testBlock.events.on('change:position', callback);

	testBlock.position = { x: 1, y: 2 };
	
	expect(callback).toHaveBeenCalledWith({ x: 1, y: 2 });
});


it('should be able to get the label', () => {
	expect(testBlock.label).toBe('new label');
});

it("should be able to add an attribute", () => {
	const testAttribute = new DataAttribute('test-attribute', {
		direction: 'input',
		datatype: Primitives.STRING
	});

	testBlock.addAttribute(testAttribute);

	expect(testBlock.attributes).toHaveProperty('test-attribute');
	expect(testAttribute.parent).toBe(testBlock);
});

it("should be able to remove an attribute", () => {
	const testAttribute = new Attribute('test-attribute', {
		direction: 'input',
	});

	testBlock.addAttribute(testAttribute);
	testBlock.removeAttribute(testAttribute);

	expect(testBlock.attributes).not.toContain(testAttribute);
	expect(testAttribute.parent).toBeUndefined();
});
