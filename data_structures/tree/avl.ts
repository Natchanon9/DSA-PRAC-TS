class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  height: number;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

class AVLTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }
  getHeight(node: TreeNode|null) {
    return node ? node.height : -1;
  }
  updateHeight(node: TreeNode):void {
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }
  balanceFactor(node: TreeNode) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }
  leftRotate(x: TreeNode) {
    const y = x.right!;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }
  rightRotate(x: TreeNode) {
    const y = x.left!;
    const T2 = y.right;

    y.right = x;
    x.left = T2;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }
  insert(root: TreeNode | null, value: number): TreeNode {
    if (root === null) {
      return new TreeNode(value);
    }

    if (value < root.value) {
      root.left = this.insert(root.left, value);
    } else if (value > root.value) {
      root.right = this.insert(root.right, value);
    } else {
      // not allow duplicate values
      return root;
    }

    this.updateHeight(root);
    const balance = this.balanceFactor(root);

    //Left heavy
    if (balance > 1) {
      //LL case
      if (value < root.left!.value) {
        return this.rightRotate(root);
      } else {
        //LR case
        root.left = this.leftRotate(root.left!);
        return this.rightRotate(root);
      }
    }
    // Right heavy
    if (balance < -1) {
      //RR case
      if (value > root.right!.value) {
        return this.leftRotate(root);
      } else {
        //RL case
        root.right = this.rightRotate(root.right!);
        return this.leftRotate(root);
      }
    }
    return root;
  }
  insertValue(value: number): void {
    this.root = this.insert(this.root, value);
  }
  inOrderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    if (root) {
      result.push(...this.inOrderTraversal(root.left));
      result.push(root.value);
      result.push(...this.inOrderTraversal(root.right));
    }
    return result;
  }
  getInOrderTraversal(): number[] {
    return this.inOrderTraversal(this.root);
  }
}

// Example:
const avlTree = new AVLTree();

avlTree.insertValue(10);
avlTree.insertValue(20);
avlTree.insertValue(30);
avlTree.insertValue(40);
avlTree.insertValue(50);
avlTree.insertValue(25);

console.log("In-order Traversal:", avlTree.getInOrderTraversal());
