import { EventEmitter } from 'events';

declare namespace RedisServer {
  /**
   * Configuration options for a {@link RedisServer}.
   */
  interface RedisServerConfig {
    /**
     * Any additional arguments to pass to the `redis-server` command.
     */
    args?: string[];
    /**
     * The path to the `redis-server` binary.
     * @default 'redis-server'
     */
    bin?: string;
    /**
     * The path to the Redis configuration file.
     */
    conf?: string;
    /**
     * The port to run the Redis server on.
     * @default 6379
     */
    port?: number | string;
    /**
     * The save configuration.
     */
    save?: string;
    /**
     * The slave configuration.
     */
    slaveof?: string;
  }

  /**
   * Invoked when an operation (i.e. {@link RedisServer#open}) completes.
   * @param err - The error, if any.
   * @param value - The value, if any.
   */
  type RedisServerCallback = (err: Error | null, value?: any) => void;
}

/**
 * Start and stop a local Redis server like a boss.
 */
declare class RedisServer extends EventEmitter {
  /**
   * Construct a new {@link RedisServer}.
   * @param configOrPort - A number or string that is a port or an object for configuration.
   */
  constructor(configOrPort?: number | string | RedisServer.RedisServerConfig);

  /**
   * Open the server.
   * @param callback - A callback to be invoked when the server is open.
   * @returns A promise that resolves when the server is open.
   */
  open(callback?: RedisServer.RedisServerCallback): Promise<any>;

  /**
   * Close the server.
   * @param callback - A callback to be invoked when the server is closed.
   * @returns A promise that resolves when the server is closed.
   */
  close(callback?: RedisServer.RedisServerCallback): Promise<any>;

  /**
   * Determine if the instance is closing a Redis server.
   */
  readonly isClosing: boolean;

  /**
   * Determine if the instance is running a Redis server.
   */
  readonly isRunning: boolean;

  /**
   * Determine if the instance is starting a Redis server.
   */
  readonly isOpening: boolean;
}

export = RedisServer;
