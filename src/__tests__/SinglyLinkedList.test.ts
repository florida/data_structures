import { SinglyLinkedList } from "../SinglyLinkedList";


describe('SinglyLinkedList', () => {
  let linkedList: SinglyLinkedList<number>;

  beforeEach(() => {
    linkedList = new SinglyLinkedList<number>();
  });

  test('append and access nodes', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.access(0)?.value).toBe(1);
    expect(linkedList.access(1)?.value).toBe(2);
    expect(linkedList.access(2)?.value).toBe(3);
    expect(linkedList.access(3)).toBeNull();
  });

  test('traverse the list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    const nodeValues: number[] = [];

    linkedList.traverse((node) => {
      nodeValues.push(node.value);
    });

    expect(nodeValues).toEqual([1, 2, 3]);
  });

  test('delete nodes', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.delete(1)).toBeTruthy();
    expect(linkedList.access(0)?.value).toBe(2);
    expect(linkedList.delete(3)).toBeTruthy();
    expect(linkedList.access(1)).toBeNull();
    expect(linkedList.delete(5)).toBeFalsy();
  });
});
