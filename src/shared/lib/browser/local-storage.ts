export class LocalStorage {

  public static get<T>(key: string, initial: T): T {
    try {
      const json = localStorage.getItem(key);
      if (json) {
        const data = JSON.parse(json);
        return data as T;
      }
      this.set(key, initial);
      return initial;
    } catch (error) {
      return initial;
    }
  }

  public static set<T>(key: string, currentValue: T): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(currentValue));
      return true;
    } catch (error) {
      return false;
    }
  }

  public static has(key: string): boolean {
    try {
      return localStorage.getItem(key) !== null;
    } catch (error) {
      return false;
    }
  }

  public static delete(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  }

  public static clear(): boolean {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      return false;
    }
  }

  public static get length(): number {
    try {
      return localStorage.length;
    } catch (error) {
      return 0;
    }
  }

}