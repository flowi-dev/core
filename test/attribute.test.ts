import { Primitives } from '../src/primitives';
import { DataAttribute } from './../src/classes/Attribute';
import { Block } from '../src/classes/Block';

const testBlock = new Block('test-block');

const attribute = new DataAttribute('test-attribute', {
  datatype: Primitives.STRING,
	direction: 'input',
	label: 'old label',
});

it('label change should emit event', () => {
  const callback = jest.fn();
  attribute.events.on('change:label', callback);

  attribute.label = 'new label';

  expect(callback).toHaveBeenCalledWith('new label');
});

it('should be able to get the label', () => {
  expect(attribute.label).toBe('new label');
});

it("should be able to set the parent block", () => {
	attribute.setParent(testBlock);

	expect(attribute.parent).toBe(testBlock);
})

it("attribute options should be set correctly", () => {
	const newAttribute = new DataAttribute('test-attribute', {
		datatype: Primitives.STRING,
		direction: 'input',
		hideLabel: true,
		hidePin: true,
	});

	expect(newAttribute.label).toBe('test-attribute');
	expect(newAttribute.hideLabel).toBe(true);
	expect(newAttribute.hidePin).toBe(true);
})
