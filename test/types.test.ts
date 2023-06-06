import { TRUE, FALSE, BOOLEAN, NUMBER, NULL, INTEGER, STRING } from '../src/primitives';
import { expect, test } from "@jest/globals";
import { ArrayType, IntersectionType, ObjectType, UnionType } from "../src/classes/Type";


test("Check that primitive types extend correctly", () => {
	expect(TRUE.extends(TRUE)).toBe(true);
	expect(TRUE.extends(FALSE)).toBe(false);
	expect(TRUE.extends(BOOLEAN)).toBe(true);
	expect(TRUE.extends(INTEGER)).toBe(false);
	expect(TRUE.extends(NUMBER)).toBe(false);
	expect(TRUE.extends(STRING)).toBe(false);
	expect(TRUE.extends(NULL)).toBe(false);

	expect(FALSE.extends(TRUE)).toBe(false);
	expect(FALSE.extends(FALSE)).toBe(true);
	expect(FALSE.extends(BOOLEAN)).toBe(true);
	expect(FALSE.extends(INTEGER)).toBe(false);
	expect(FALSE.extends(NUMBER)).toBe(false);
	expect(FALSE.extends(STRING)).toBe(false);
	expect(FALSE.extends(NULL)).toBe(false);

	expect(BOOLEAN.extends(TRUE)).toBe(false);
	expect(BOOLEAN.extends(FALSE)).toBe(false);
	expect(BOOLEAN.extends(BOOLEAN)).toBe(true);
	expect(BOOLEAN.extends(INTEGER)).toBe(false);
	expect(BOOLEAN.extends(NUMBER)).toBe(false);
	expect(BOOLEAN.extends(STRING)).toBe(false);
	expect(BOOLEAN.extends(NULL)).toBe(false);

	expect(INTEGER.extends(TRUE)).toBe(false);
	expect(INTEGER.extends(FALSE)).toBe(false);
	expect(INTEGER.extends(BOOLEAN)).toBe(false);
	expect(INTEGER.extends(INTEGER)).toBe(true);
	expect(INTEGER.extends(NUMBER)).toBe(true);
	expect(INTEGER.extends(STRING)).toBe(false);
	expect(INTEGER.extends(NULL)).toBe(false);

	expect(NUMBER.extends(TRUE)).toBe(false);
	expect(NUMBER.extends(FALSE)).toBe(false);
	expect(NUMBER.extends(BOOLEAN)).toBe(false);
	expect(NUMBER.extends(INTEGER)).toBe(false);
	expect(NUMBER.extends(NUMBER)).toBe(true);
	expect(NUMBER.extends(STRING)).toBe(false);
	expect(NUMBER.extends(NULL)).toBe(false);

	expect(STRING.extends(TRUE)).toBe(false);
	expect(STRING.extends(FALSE)).toBe(false);
	expect(STRING.extends(BOOLEAN)).toBe(false);
	expect(STRING.extends(INTEGER)).toBe(false);
	expect(STRING.extends(NUMBER)).toBe(false);
	expect(STRING.extends(STRING)).toBe(true);
	expect(STRING.extends(NULL)).toBe(false);

	expect(NULL.extends(TRUE)).toBe(false);
	expect(NULL.extends(FALSE)).toBe(false);
	expect(NULL.extends(BOOLEAN)).toBe(false);
	expect(NULL.extends(INTEGER)).toBe(false);
	expect(NULL.extends(NUMBER)).toBe(false);
	expect(NULL.extends(STRING)).toBe(false);
	expect(NULL.extends(NULL)).toBe(true);
})

test("Check that types can be checked correctly", () => {
	expect(TRUE.check(true)).toBe(true);
	expect(TRUE.check(false)).toBe(false);
	expect(TRUE.check(1)).toBe(false);
	expect(TRUE.check(0.5)).toBe(false);
	expect(TRUE.check("true")).toBe(false);
	expect(TRUE.check(null)).toBe(false);
	expect(TRUE.check([])).toBe(false);
	expect(TRUE.check({})).toBe(false);

	expect(FALSE.check(true)).toBe(false);
	expect(FALSE.check(false)).toBe(true);
	expect(FALSE.check(1)).toBe(false);
	expect(FALSE.check(0.5)).toBe(false);
	expect(FALSE.check("true")).toBe(false);
	expect(FALSE.check(null)).toBe(false);
	expect(FALSE.check([])).toBe(false);
	expect(FALSE.check({})).toBe(false);

	expect(BOOLEAN.check(true)).toBe(true);
	expect(BOOLEAN.check(false)).toBe(true);
	expect(BOOLEAN.check(1)).toBe(false);
	expect(BOOLEAN.check(0.5)).toBe(false);
	expect(BOOLEAN.check("true")).toBe(false);
	expect(BOOLEAN.check(null)).toBe(false);
	expect(BOOLEAN.check([])).toBe(false);
	expect(BOOLEAN.check({})).toBe(false);

	expect(INTEGER.check(true)).toBe(false);
	expect(INTEGER.check(false)).toBe(false);
	expect(INTEGER.check(1)).toBe(true);
	expect(INTEGER.check(0.5)).toBe(false);
	expect(INTEGER.check("true")).toBe(false);
	expect(INTEGER.check(null)).toBe(false);
	expect(INTEGER.check([])).toBe(false);
	expect(INTEGER.check({})).toBe(false);

	expect(NUMBER.check(true)).toBe(false);
	expect(NUMBER.check(false)).toBe(false);
	expect(NUMBER.check(1)).toBe(true);
	expect(NUMBER.check(0.5)).toBe(true);
	expect(NUMBER.check("true")).toBe(false);
	expect(NUMBER.check(null)).toBe(false);
	expect(NUMBER.check([])).toBe(false);
	expect(NUMBER.check({})).toBe(false);

	expect(STRING.check(true)).toBe(false);
	expect(STRING.check(false)).toBe(false);
	expect(STRING.check(1)).toBe(false);
	expect(STRING.check(0.5)).toBe(false);
	expect(STRING.check("true")).toBe(true);
	expect(STRING.check(null)).toBe(false);
	expect(STRING.check([])).toBe(false);
	expect(STRING.check({})).toBe(false);

	expect(NULL.check(true)).toBe(false);
	expect(NULL.check(false)).toBe(false);
	expect(NULL.check(1)).toBe(false);
	expect(NULL.check(0.5)).toBe(false);
	expect(NULL.check("true")).toBe(false);
	expect(NULL.check(null)).toBe(true);
	expect(NULL.check([])).toBe(false);
	expect(NULL.check({})).toBe(false);
})

test("Check union types extend correctly", () => {
	const UNION = new UnionType("union", [STRING, NUMBER]);

	expect(UNION.extends(STRING)).toBe(false);
	expect(UNION.extends(NUMBER)).toBe(false);
	expect(UNION.extends(UNION)).toBe(true);
	expect(UNION.extends(new UnionType("union", [STRING, NUMBER]))).toBe(true);
	expect(UNION.extends(new UnionType("union", [STRING, NUMBER, BOOLEAN]))).toBe(true);
	expect(UNION.extends(new UnionType("union", [STRING, BOOLEAN]))).toBe(false);
	expect(UNION.extends(new UnionType("union", [NUMBER, BOOLEAN]))).toBe(false);
	
	expect(STRING.extends(UNION)).toBe(true);
	expect(NUMBER.extends(UNION)).toBe(true);
	
});

test("Check that objects can be checked correctly", () => {
	const UserObj = new ObjectType("User", {
		name: STRING,
		age: INTEGER,
		verified: BOOLEAN,
		created: NUMBER,
	})

	expect(UserObj.check({
		name: "John Doe",
		age: 21,
		verified: true,
		created: 1.5,
	})).toBe(true);

	expect(UserObj.check({
		name: "John Doe",
		age: 21,
		verified: true,
		created: 1.5,
		other: "other",
	})).toBe(true);

	expect(UserObj.check({
		name: "John Doe",
		age: 21,
		verified: true,
	})).toBe(false);

	expect(UserObj.check({
		name: 21,
		age: "John Doe",
		verified: true,
		created: 1.5,
	})).toBe(false);

	expect(UserObj.check(null)).toBe(false);
	expect(UserObj.check([])).toBe(false);
	expect(UserObj.check({})).toBe(false);
	expect(UserObj.check(1)).toBe(false);
	expect(UserObj.check(0.5)).toBe(false);

});

test("Check that objects can be extended correctly", () => {
	const UserObj = new ObjectType("User", {
		name: STRING,
		age: INTEGER,
		verified: BOOLEAN,
		created: NUMBER,
	})

	const AdminObj = UserObj.extend("Admin", {
		admin: TRUE,
	});

	expect(AdminObj.check({
		name: "John Doe",
		age: 21,
		verified: true,
		created: 1.5,
		admin: true,
	})).toBe(true);

	expect(AdminObj.check({
		name: "John Doe",
		age: 21,
		verified: true,
		created: 1.5,
		admin: false,
	})).toBe(false);

	expect(AdminObj.check({
		admin: true,
	})).toBe(false);

	expect(AdminObj.check({
		name: "John Doe",
		age: 21,
		verified: true,
		created: 1.5,
	})).toBe(false);


	expect(AdminObj.extends(UserObj)).toBe(true);
	expect(UserObj.extends(AdminObj)).toBe(false);
	expect(AdminObj.extends(AdminObj)).toBe(true);
	expect(UserObj.extends(UserObj)).toBe(true);
	expect(AdminObj.extends(STRING)).toBe(false);
	expect(AdminObj.extends(NULL)).toBe(false);
});

test("Test intersection types", () => { 

	expect(() => {
		new IntersectionType("AB", [
			new ObjectType("ObjA", {
				a: new UnionType('A', [STRING, NUMBER]),
			}),
			new ObjectType("ObjB", {
				a: NUMBER
			})
		])
	}).not.toThrow();

	expect(
		new IntersectionType("AB", [
			new ObjectType("ObjA", {
				a: new UnionType('A', [STRING, NUMBER]),
			}),
			new ObjectType("ObjB", {
				a: NUMBER,
				b: STRING
			})
		]).properties
	).toStrictEqual({
		a: NUMBER,
		b: STRING
	})

	expect(
		new IntersectionType("AB", [
			new ObjectType("ObjA", {
				a: NUMBER,
			}),
			new ObjectType("ObjB", {
				a: new UnionType('A', [STRING, NUMBER]),
				b: STRING
			})
		]).properties
	).toStrictEqual({
		a: NUMBER,
		b: STRING
	})

	expect(() => {
		new IntersectionType("AB", [
			new ObjectType("ObjA", {
				a: new UnionType('A', [STRING, NUMBER]),
			}),
			new ObjectType("ObjB", {
				a: BOOLEAN,
				b: STRING
			})
		])
	}).toThrow();
})

test("Test array types", () => {

	const NUM_ARRAY = new ArrayType('number[]', NUMBER);
	expect(NUM_ARRAY.check([1, 2, 3])).toBe(true);
	expect(NUM_ARRAY.check([1, 2, "3"])).toBe(false);
	expect(NUM_ARRAY.check([1, 2, 3, "4"])).toBe(false);
	expect(NUM_ARRAY.check([1, 2, 3, null])).toBe(false);
	expect(NUM_ARRAY.check([1, 2, 3, undefined])).toBe(false);
	expect(NUM_ARRAY.check([1, 2, 3, true])).toBe(false);
	expect(NUM_ARRAY.check("Hello world!")).toBe(false);
	expect(NUM_ARRAY.check(1)).toBe(false);

	const STR_ARRAY = new ArrayType('string[]', STRING);
	expect(STR_ARRAY.check(["1", "2", "3"])).toBe(true);
	expect(STR_ARRAY.check(["1", "2", 3])).toBe(false);
	expect(STR_ARRAY.check(["1", "2", "3", 4])).toBe(false);
	expect(STR_ARRAY.check(["1", "2", "3", null])).toBe(false);
	expect(STR_ARRAY.check(["1", "2", "3", undefined])).toBe(false);

	const UNION_ARRAY = new ArrayType('(string|number)[]', new UnionType('string|number', [STRING, NUMBER]));
	expect(UNION_ARRAY.check(["1", "2", "3"])).toBe(true);
	expect(UNION_ARRAY.check(["1", "2", 3])).toBe(true);
	expect(UNION_ARRAY.check(["1", "2", 3, 4])).toBe(true);
	expect(UNION_ARRAY.check(["1", "2", 3, null])).toBe(false);
	expect(UNION_ARRAY.check(["1", "2", 3, undefined])).toBe(false);


	expect(STR_ARRAY.extends(NUM_ARRAY)).toBe(false);
	expect(NUM_ARRAY.extends(STR_ARRAY)).toBe(false);
	expect(STR_ARRAY.extends(STR_ARRAY)).toBe(true);
	expect(NUM_ARRAY.extends(NUM_ARRAY)).toBe(true);
	expect(STR_ARRAY.extends(STRING)).toBe(false);
	expect(STR_ARRAY.extends(NULL)).toBe(false);
	expect(UNION_ARRAY.extends(STR_ARRAY)).toBe(false);
});